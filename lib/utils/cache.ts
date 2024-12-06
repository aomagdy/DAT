import { cache } from 'react'
import { log } from '@/lib/logger'

interface CacheConfig {
  maxAge: number
  staleWhileRevalidate: number
}

const DEFAULT_CACHE_CONFIG: CacheConfig = {
  maxAge: 60 * 5, // 5 minutes
  staleWhileRevalidate: 60 * 60 // 1 hour
}

export const CACHE_CONTROL = {
  public: {
    default: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    static: 'public, max-age=31536000, immutable',
    dynamic: 'public, max-age=300, s-maxage=300, stale-while-revalidate=3600'
  },
  private: {
    default: 'private, no-cache, no-store, must-revalidate',
    auth: 'private, no-cache, no-store, must-revalidate, max-age=0'
  }
}

export const fetchWithCache = cache(async <T>(
  key: string,
  fetcher: () => Promise<T>,
  config: Partial<CacheConfig> = {}
): Promise<T> => {
  const { maxAge, staleWhileRevalidate } = { ...DEFAULT_CACHE_CONFIG, ...config }
  
  try {
    const data = await fetcher()
    return data
  } catch (error) {
    log.error('Cache fetch error:', error)
    throw error
  }
})

export function getCacheControl(isPublic = true, type: 'default' | 'static' | 'dynamic' = 'default') {
  if (!isPublic) return CACHE_CONTROL.private.default
  return CACHE_CONTROL.public[type]
}

export function setCacheHeaders(res: Response, isPublic = true, type: 'default' | 'static' | 'dynamic' = 'default') {
  res.headers.set('Cache-Control', getCacheControl(isPublic, type))
  return res
}