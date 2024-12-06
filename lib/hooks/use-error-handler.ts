import { useCallback } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { handleError, AppError, AuthenticationError, AuthorizationError } from '@/lib/utils/error'

export function useErrorHandler() {
  const { toast } = useToast()

  const handleErrorWithToast = useCallback((error: unknown) => {
    const appError = handleError(error)

    if (appError instanceof AuthenticationError) {
      toast({
        title: 'Authentication Required',
        description: appError.message,
        variant: 'destructive'
      })
      // Redirect to login or handle auth error
      return
    }

    if (appError instanceof AuthorizationError) {
      toast({
        title: 'Access Denied',
        description: appError.message,
        variant: 'destructive'
      })
      return
    }

    toast({
      title: 'Error',
      description: appError.message,
      variant: 'destructive'
    })
  }, [toast])

  return { handleError: handleErrorWithToast }
}