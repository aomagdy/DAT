import useSWR from 'swr'
import { api } from '@/lib/utils/api-client'

const fetcher = (url: string) => api.get(url).then(res => res.data)

export function useSWRQuery<T>(key: string | null) {
  const { data, error, mutate } = useSWR<T>(key, fetcher)

  return {
    data,
    error,
    loading: !data && !error,
    mutate
  }
}