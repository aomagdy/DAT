type EventType = 'page_view' | 'button_click' | 'form_submit' | 'error'

interface AnalyticsEvent {
  type: EventType
  name: string
  properties?: Record<string, any>
}

export function trackEvent({ type, name, properties = {} }: AnalyticsEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, {
      event_category: type,
      ...properties
    })
  }
}

export function trackPageView(url: string) {
  trackEvent({
    type: 'page_view',
    name: url
  })
}

export function trackError(error: Error, context?: Record<string, any>) {
  trackEvent({
    type: 'error',
    name: error.name,
    properties: {
      message: error.message,
      ...context
    }
  })
}