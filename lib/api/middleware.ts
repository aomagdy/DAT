import { AxiosInstance } from 'axios'
import { getSession } from 'next-auth/react'
import { AppError } from '@/lib/utils/error'

export const setupAPIMiddleware = (api: AxiosInstance) => {
  // Request interceptor
  api.interceptors.request.use(
    async (config) => {
      const session = await getSession()
      
      if (session?.user) {
        config.headers.Authorization = `Bearer ${session.user.id}`
      }

      // Add request ID for tracking
      config.headers['X-Request-ID'] = crypto.randomUUID()
      
      return config
    },
    (error) => Promise.reject(error)
  )

  // Response interceptor
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (!error.response) {
        throw new AppError(
          'Network error occurred',
          'NETWORK_ERROR',
          0
        )
      }

      const { status, data } = error.response

      // Handle specific error cases
      switch (status) {
        case 401:
          throw new AppError(
            'Authentication required',
            'UNAUTHORIZED',
            status
          )
        case 403:
          throw new AppError(
            'Access denied',
            'FORBIDDEN',
            status
          )
        case 404:
          throw new AppError(
            'Resource not found',
            'NOT_FOUND',
            status
          )
        case 422:
          throw new AppError(
            'Validation failed',
            'VALIDATION_ERROR',
            status,
            data.errors
          )
        default:
          throw new AppError(
            data.message || 'An unexpected error occurred',
            data.code || 'INTERNAL_ERROR',
            status
          )
      }
    }
  )
}