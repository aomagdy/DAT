"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react'
import { logger } from '@/lib/logger'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logger.error(error, 'React Error Boundary caught an error')
    this.setState({ errorInfo })
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-[400px] flex items-center justify-center p-6">
          <Alert variant="destructive" className="max-w-lg">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription className="mt-4">
              <div className="space-y-4">
                {process.env.NODE_ENV === 'development' && (
                  <>
                    <p className="font-mono text-sm">
                      {this.state.error?.message}
                    </p>
                    {this.state.errorInfo && (
                      <pre className="text-xs overflow-auto max-h-40 p-2 bg-background/10 rounded">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </>
                )}
                <div className="flex gap-4">
                  <Button 
                    variant="outline"
                    onClick={this.handleReset}
                    className="gap-2"
                  >
                    <RefreshCcw className="h-4 w-4" />
                    Try again
                  </Button>
                  <Button asChild className="gap-2">
                    <Link href="/">
                      <Home className="h-4 w-4" />
                      Return Home
                    </Link>
                  </Button>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )
    }

    return this.props.children
  }
}