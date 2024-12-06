"use client"

import { createContext, useContext, useReducer, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface AuthState {
  isAuthenticated: boolean
  user: any | null
  loading: boolean
}

type AuthAction = 
  | { type: 'SET_AUTH'; payload: { user: any } }
  | { type: 'CLEAR_AUTH' }
  | { type: 'SET_LOADING'; payload: boolean }

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true
}

const AuthContext = createContext<{
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
} | undefined>(undefined)

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        loading: false
      }
    case 'CLEAR_AUTH':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'loading') {
      dispatch({ type: 'SET_LOADING', payload: true })
    } else if (session?.user) {
      dispatch({ type: 'SET_AUTH', payload: { user: session.user } })
    } else {
      dispatch({ type: 'CLEAR_AUTH' })
    }
  }, [session, status])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}