import { QueryClient } from '@tanstack/react-query'
import { AppError } from '@/lib/utils/error'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: (failureCount, error) => {
        if (error instanceof AppError) {
          // Don't retry for client errors (4xx)
          if (error.statusCode >= 400 && error.statusCode < 500) {
            return false
          }
        }
        return failureCount < 3
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true
    }
  }
})