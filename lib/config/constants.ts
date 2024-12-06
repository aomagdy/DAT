export const APP_CONFIG = {
  name: 'DATGenius',
  description: 'AI-Powered DAT Preparation Platform',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 10000,
  },
  auth: {
    sessionMaxAge: 30 * 24 * 60 * 60, // 30 days
    refreshTokenMaxAge: 90 * 24 * 60 * 60, // 90 days
    passwordResetExpiry: 24 * 60 * 60, // 24 hours
  },
  cache: {
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
    maxAge: 60 * 60 * 24, // 24 hours
  },
  security: {
    allowedOrigins: [
      'http://localhost:3000',
      'https://datgenius.com'
    ],
    corsMaxAge: 60 * 60 * 24, // 24 hours
    rateLimits: {
      auth: { points: 5, duration: 60 * 15 }, // 5 attempts per 15 minutes
      api: { points: 100, duration: 60 } // 100 requests per minute
    }
  },
  monitoring: {
    logLevel: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    sampleRate: 0.1, // 10% of requests
    performanceThresholds: {
      tti: 3000, // Time to Interactive
      fcp: 1000, // First Contentful Paint
      lcp: 2500  // Largest Contentful Paint
    }
  }
} as const

export const ROUTES = {
  public: {
    home: '/',
    login: '/login',
    register: '/register',
    about: '/about',
    features: '/features',
    pricing: '/pricing',
    contact: '/contact',
    resources: '/resources'
  },
  protected: {
    dashboard: '/dashboard',
    profile: '/profile',
    settings: '/settings',
    study: '/study'
  },
  api: {
    auth: '/api/auth',
    user: '/api/user',
    content: '/api/content'
  }
} as const