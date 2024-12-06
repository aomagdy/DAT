"use client"

import { AuthProvider } from './auth-context'
import { UIProvider } from './ui-context'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <UIProvider>
        {children}
      </UIProvider>
    </AuthProvider>
  )
}

export * from './auth-context'
export * from './ui-context'