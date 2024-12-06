"use client"

import { createContext, useContext, useReducer } from 'react'

interface UIState {
  theme: 'light' | 'dark' | 'system'
  sidebarOpen: boolean
  toasts: Array<{
    id: string
    type: 'success' | 'error' | 'info'
    message: string
  }>
}

type UIAction =
  | { type: 'SET_THEME'; payload: UIState['theme'] }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'ADD_TOAST'; payload: Omit<UIState['toasts'][0], 'id'> }
  | { type: 'REMOVE_TOAST'; payload: string }

const initialState: UIState = {
  theme: 'system',
  sidebarOpen: false,
  toasts: []
}

const UIContext = createContext<{
  state: UIState
  dispatch: React.Dispatch<UIAction>
} | undefined>(undefined)

function uiReducer(state: UIState, action: UIAction): UIState {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen }
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, { id: Date.now().toString(), ...action.payload }]
      }
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload)
      }
    default:
      return state
  }
}

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}