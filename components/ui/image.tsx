"use client"

import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { useState } from 'react'

interface ImageProps extends Omit<NextImageProps, 'onError'> {
  fallback?: string
}

export function Image({ src, alt, fallback = '/placeholder.jpg', ...props }: ImageProps) {
  const [error, setError] = useState(false)

  return (
    <NextImage
      src={error ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  )
}