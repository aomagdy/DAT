"use client"

import { useImageOptimization } from '@/lib/performance/image-optimization'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  sizes?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  sizes,
  priority,
  className,
  ...props
}: OptimizedImageProps) {
  const { ref, isLoaded, onLoad, srcSet, sizes: imageSizes } = useImageOptimization({
    src,
    sizes,
    priority
  })

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      sizes={imageSizes}
      srcSet={srcSet}
      onLoad={onLoad}
      className={cn(
        'transition-opacity duration-300',
        !isLoaded && 'opacity-0',
        isLoaded && 'opacity-100',
        className
      )}
      {...props}
    />
  )
}