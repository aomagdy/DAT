"use client"

import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals'

export interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
}

const thresholds = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  LCP: { good: 2500, poor: 4000 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 }
}

function getRating(name: string, value: number): PerformanceMetric['rating'] {
  const threshold = thresholds[name as keyof typeof thresholds]
  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

export function initializePerformanceMonitoring(onMetric: (metric: PerformanceMetric) => void) {
  getCLS((metric) => {
    onMetric({
      name: 'CLS',
      value: metric.value,
      rating: getRating('CLS', metric.value),
      delta: metric.delta
    })
  })

  getFID((metric) => {
    onMetric({
      name: 'FID',
      value: metric.value,
      rating: getRating('FID', metric.value),
      delta: metric.delta
    })
  })

  getLCP((metric) => {
    onMetric({
      name: 'LCP',
      value: metric.value,
      rating: getRating('LCP', metric.value),
      delta: metric.delta
    })
  })

  getFCP((metric) => {
    onMetric({
      name: 'FCP',
      value: metric.value,
      rating: getRating('FCP', metric.value),
      delta: metric.delta
    })
  })

  getTTFB((metric) => {
    onMetric({
      name: 'TTFB',
      value: metric.value,
      rating: getRating('TTFB', metric.value),
      delta: metric.delta
    })
  })
}