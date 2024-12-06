import { NextRequest, NextResponse } from 'next/server'
import { log } from '@/lib/logger'
import { AppError } from '@/lib/utils/error'

export function errorHandler(
  error: unknown,
  req: NextRequest
): NextResponse {
  if (error instanceof AppError) {
    log.error(error, `API Error: ${error.code}`)
    
    return new NextResponse(
      JSON.stringify({
        code: error.code,
        message: error.message,
        ...(process.env.NODE_ENV === 'development' && {
          stack: error.stack
        })
      }),
      {
        status: error.statusCode,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  log.error(error, 'Unhandled API Error')
  
  return new NextResponse(
    JSON.stringify({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred'
    }),
    {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}