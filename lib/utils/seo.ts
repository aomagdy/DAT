import { defaultSEOConfig } from '@/lib/config'
import type { Metadata } from 'next'

export function generateMetadata(
  title: string,
  description?: string,
  image?: string
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  
  return {
    title: `${title} | ${defaultSEOConfig.defaultTitle}`,
    description: description || defaultSEOConfig.description,
    openGraph: {
      title,
      description: description || defaultSEOConfig.description,
      images: image ? [{ url: `${baseUrl}${image}` }] : defaultSEOConfig.openGraph.images
    },
    twitter: defaultSEOConfig.twitter
  }
}