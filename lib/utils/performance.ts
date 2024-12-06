import { useEffect, useRef, useState } from 'react'
import { log } from '@/lib/logger'

interface PerformanceMetrics {
  FCP: number // First Contentful Paint
  LCP: number // Largest Contentful Paint
  FID: number // First Input Delay
  CLS: number // Cumulative Layout Shift
  TTFB: number // Time to First Byte
}

export function usePerformanceMonitoring() {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const metric = {
          name: entry.name,
          value: entry.startTime,
          rating: getRating(entry.name, entry.startTime)
        }
        
        log.info('Performance metric:', metric)
        
        if (process.env.NODE_ENV === 'production') {
          reportMetricToAnalytics(metric)
        }
      })
    })

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input'] })

    return () => observer.disconnect()
  }, [])
}

export function useLazyLoading(threshold = '200px') {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin: threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible] as const
}

export function useImagePreloader(imageSrcs: string[]) {
  useEffect(() => {
    const preloadImages = imageSrcs.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = reject
      })
    })

    Promise.all(preloadImages).catch((error) => {
      log.error('Image preloading failed:', error)
    })
  }, [imageSrcs])
}

function getRating(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = {
    FCP: { good: 1800, poor: 3000 },
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    TTFB: { good: 800, poor: 1800 }
  }

  const metric = thresholds[metricName as keyof typeof thresholds]
  if (!metric) return 'needs-improvement'

  if (value <= metric.good) return 'good'
  if (value <= metric.poor) return 'needs-improvement'
  return 'poor'
}

function reportMetricToAnalytics(metric: { name: string; value: number; rating: string }) {
  if (window.gtag) {
    window.gtag('event', 'performance_metric', {
      metric_name: metric.name,
      metric_value: metric.value,
      metric_rating: metric.rating
    })
  }
}