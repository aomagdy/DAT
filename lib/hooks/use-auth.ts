import { useCallback } from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useAuthStore } from '@/lib/store/auth-store'
import { useToast } from '@/components/ui/use-toast'
import { LoginFormData } from '@/lib/validation/schemas/auth'

export function useAuth() {
  const { toast } = useToast()
  const { setUser, setError, setLoading, logout } = useAuthStore()

  const login = useCallback(async (data: LoginFormData) => {
    setLoading(true)
    try {
      const result = await signIn('credentials', {
        ...data,
        redirect: false
      })

      if (result?.error) {
        throw new Error(result.error)
      }

      toast({
        title: 'Welcome back!',
        description: 'You have successfully logged in.'
      })
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to login')
      toast({
        title: 'Error',
        description: 'Invalid email or password',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }, [setLoading, setError, toast])

  const handleLogout = useCallback(async () => {
    try {
      await signOut({ redirect: false })
      logout()
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out.'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to logout. Please try again.',
        variant: 'destructive'
      })
    }
  }, [logout, toast])

  return {
    login,
    logout: handleLogout
  }
}