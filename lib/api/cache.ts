import { QueryClient } from '@tanstack/react-query'

const STALE_TIME = 1000 * 60 * 5 // 5 minutes
const CACHE_TIME = 1000 * 60 * 30 // 30 minutes

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
      retry: (failureCount, error: any) => {
        // Don't retry on 404s or other client errors
        if (error?.response?.status >= 400 && error?.response?.status < 500) {
          return false
        }
        return failureCount < 3
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true
    }
  }
})

export const prefetchQuery = async (key: string[], fetcher: () => Promise<any>) => {
  await queryClient.prefetchQuery({
    queryKey: key,
    queryFn: fetcher
  })
}

export const invalidateQueries = async (key: string[]) => {
  await queryClient.invalidateQueries({ queryKey: key })
}