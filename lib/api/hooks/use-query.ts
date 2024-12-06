import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { api } from '../client'
import { handleError } from '@/lib/utils/error'

interface UseApiQueryOptions<TData> extends Omit<UseQueryOptions<TData, Error>, 'queryKey' | 'queryFn'> {
  endpoint: string
  params?: Record<string, any>
}

export function useApiQuery<TData>({ 
  endpoint,
  params,
  ...options 
}: UseApiQueryOptions<TData>) {
  return useQuery({
    queryKey: [endpoint, params],
    queryFn: async () => {
      try {
        return await api.get<TData>(endpoint, { params })
      } catch (error) {
        throw handleError(error)
      }
    },
    ...options
  })
}