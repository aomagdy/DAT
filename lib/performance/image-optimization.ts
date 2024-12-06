"use client"

import { useEffect, useRef, useState } from 'react'

interface UseImageOptimizationProps {
  src: string
  sizes?: string
  priority?: boolean
}

export function useImageOptimization({
  src,
  sizes = '100vw',
  priority = false
}: UseImageOptimizationProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!priority) return

    const img = imgRef.current
    if (!img) return

    if (img.complete) {
      setIsLoaded(true)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.sizes = sizes
            img.srcset = generateSrcSet(src)
            observer.unobserve(img)
          }
        })
      },
      {
        rootMargin: '50px'
      }
    )

    observer.observe(img)
    return () => observer.disconnect()
  }, [src, sizes, priority])

  return {
    ref: imgRef,
    isLoaded,
    onLoad: () => setIsLoaded(true),
    srcSet: generateSrcSet(src),
    sizes
  }
}

function generateSrcSet(src: string): string {
  const widths = [640, 750, 828, 1080, 1200, 1920]
  return widths
    .map((width) => `${getOptimizedImageUrl(src, width)} ${width}w`)
    .join(', ')
}

function getOptimizedImageUrl(src: string, width: number): string {
  if (src.startsWith('https://images.unsplash.com')) {
    const url = new URL(src)
    url.searchParams.set('w', width.toString())
    url.searchParams.set('q', '75')
    url.searchParams.set('auto', 'format')
    return url.toString()
  }
  return src
}