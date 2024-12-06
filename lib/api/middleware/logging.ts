import { NextRequest, NextResponse } from 'next/server'
import { log } from '@/lib/logger'
import { nanoid } from 'nanoid'

export async function loggerMiddleware(
  request: NextRequest,
  next: () => Promise<NextResponse>
) {
  const requestId = nanoid()
  const startTime = Date.now()

  try {
    const response = await next()
    const duration = Date.now() - startTime

    log.info('API Request completed', {
      requestId,
      method: request.method,
      url: request.url,
      status: response.status,
      duration,
      userAgent: request.headers.get('user-agent')
    })

    response.headers.set('X-Request-ID', requestId)
    return response
  } catch (error) {
    log.error(error, 'API Request failed')
    throw error
  }
}