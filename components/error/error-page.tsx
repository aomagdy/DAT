import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react'

interface ErrorPageProps {
  error: Error
  resetError?: () => void
}

export function ErrorPage({ error, resetError }: ErrorPageProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6">
      <div className="max-w-lg w-full">
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Application Error</AlertTitle>
          <AlertDescription>
            {error.message || 'An unexpected error occurred'}
          </AlertDescription>
        </Alert>

        <div className="flex flex-col sm:flex-row gap-4">
          {resetError && (
            <Button 
              variant="default" 
              onClick={resetError}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Try Again
            </Button>
          )}
          
          <Button 
            variant="outline" 
            asChild
            className="gap-2"
          >
            <Link href="/">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}