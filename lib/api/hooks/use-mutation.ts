import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { api } from '../client'
import { handleError } from '@/lib/utils/error'

interface UseApiMutationOptions<TData, TVariables> 
  extends Omit<UseMutationOptions<TData, Error, TVariables>, 'mutationFn'> {
  endpoint: string
  method?: 'POST' | 'PUT' | 'DELETE'
}

export function useApiMutation<TData, TVariables>({ 
  endpoint,
  method = 'POST',
  ...options 
}: UseApiMutationOptions<TData, TVariables>) {
  return useMutation({
    mutationFn: async (variables: TVariables) => {
      try {
        switch (method) {
          case 'POST':
            return await api.post<TData>(endpoint, variables)
          case 'PUT':
            return await api.put<TData>(endpoint, variables)
          case 'DELETE':
            return await api.delete<TData>(`${endpoint}/${variables}`)
          default:
            throw new Error(`Unsupported method: ${method}`)
        }
      } catch (error) {
        throw handleError(error)
      }
    },
    ...options
  })
}