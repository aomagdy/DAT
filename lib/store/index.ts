import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  user: {
    preferences: {
      notifications: boolean
      emailFrequency: 'daily' | 'weekly' | 'monthly'
    }
  } | null
  setUser: (user: AppState['user']) => void
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      user: null,
      setUser: (user) => set({ user })
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ theme: state.theme })
    }
  )
)