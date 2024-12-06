export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

export interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  data?: any
  error?: Error
}

export interface LogMetadata {
  userId?: string
  requestId?: string
  path?: string
  method?: string
  [key: string]: any
}