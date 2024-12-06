"use client"

import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from '@/components/error/error-boundary'
import { Toaster } from "@/components/ui/toaster"
import { queryClient } from '@/lib/api/query-client'
import { usePerformanceMonitoring } from '@/lib/hooks/use-performance'

export function Providers({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}) {
  // Initialize performance monitoring
  usePerformanceMonitoring()

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      </QueryClientProvider>
    </ErrorBoundary>
  )
}