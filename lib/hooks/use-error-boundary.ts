"use client"

import { useCallback, useState } from 'react'
import { logger } from '@/lib/logger'
import { useToast } from '@/components/ui/use-toast'
import { AppError } from '@/lib/utils/error'

interface ErrorBoundaryState {
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

export function useErrorBoundary() {
  const [state, setState] = useState<ErrorBoundaryState>({
    error: null,
    errorInfo: null
  })
  const { toast } = useToast()

  const handleError = useCallback((error: Error, errorInfo: React.ErrorInfo) => {
    setState({ error, errorInfo })
    
    // Log the error
    logger.error(error, 'React Error Boundary caught an error')

    // Show user-friendly error message
    toast({
      title: 'An error occurred',
      description: process.env.NODE_ENV === 'development' 
        ? error.message 
        : 'Something went wrong. Please try again later.',
      variant: 'destructive'
    })

    // Report to error monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Implementation for your error monitoring service
    }
  }, [toast])

  const resetError = useCallback(() => {
    setState({ error: null, errorInfo: null })
  }, [])

  return {
    error: state.error,
    errorInfo: state.errorInfo,
    handleError,
    resetError
  }
}