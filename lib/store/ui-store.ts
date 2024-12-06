import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  theme: 'light' | 'dark' | 'system'
  sidebarOpen: boolean
  notifications: {
    enabled: boolean
    sound: boolean
    desktop: boolean
  }
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  toggleSidebar: () => void
  updateNotifications: (settings: Partial<UIState['notifications']>) => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: 'system',
      sidebarOpen: false,
      notifications: {
        enabled: true,
        sound: true,
        desktop: false
      },
      setTheme: (theme) => set({ theme }),
      toggleSidebar: () => set((state) => ({ 
        sidebarOpen: !state.sidebarOpen 
      })),
      updateNotifications: (settings) => set((state) => ({
        notifications: {
          ...state.notifications,
          ...settings
        }
      }))
    }),
    {
      name: 'ui-storage',
      partialize: (state) => ({ 
        theme: state.theme,
        notifications: state.notifications
      })
    }
  )
)