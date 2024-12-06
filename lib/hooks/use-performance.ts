"use client"

import { useEffect } from 'react'
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals'
import { log } from '@/lib/logger'

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Initialize performance monitoring
    const vitalsCallback = ({ name, value, rating }) => {
      log.info(`Performance Metric: ${name}`, {
        value,
        rating,
        timestamp: new Date().toISOString()
      })

      // Report to analytics in production
      if (process.env.NODE_ENV === 'production' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: name,
          value: Math.round(name === 'CLS' ? value * 1000 : value),
          non_interaction: true,
        })
      }
    }

    getCLS(vitalsCallback)
    getFID(vitalsCallback)
    getLCP(vitalsCallback)
    getFCP(vitalsCallback)
    getTTFB(vitalsCallback)
  }, [])
}