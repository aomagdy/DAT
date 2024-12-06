import { headers } from 'next/headers'

export function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  
  // Fallback to environment variable or default
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://datgenius.com'
}

export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = getBaseUrl()
  
  // Remove trailing slashes and clean the path
  const cleanPath = path.replace(/\/+$/, '').replace(/^\/+/, '')
  
  return `${baseUrl}${cleanPath ? `/${cleanPath}` : ''}`
}