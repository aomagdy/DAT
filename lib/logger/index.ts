import pino from 'pino'
import { LogLevel } from './types'

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: 'pid,hostname',
      translateTime: 'yyyy-mm-dd HH:MM:ss'
    }
  },
  redact: {
    paths: ['password', 'token', 'secret', 'key'],
    remove: true
  }
})

export const log = {
  info: (message: string, data?: any) => {
    logger.info(data, message)
  },
  error: (error: Error | unknown, message?: string) => {
    logger.error(
      {
        err: error,
        ...(error instanceof Error && {
          stack: error.stack,
          name: error.name
        })
      },
      message || 'An error occurred'
    )
  },
  warn: (message: string, data?: any) => {
    logger.warn(data, message)
  },
  debug: (message: string, data?: any) => {
    logger.debug(data, message)
  }
}

export type Logger = typeof log
export * from './types'