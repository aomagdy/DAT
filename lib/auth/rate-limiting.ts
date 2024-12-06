const rateLimit = new Map<string, { count: number; timestamp: number }>()

export function checkRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now()
  const record = rateLimit.get(key)

  if (!record) {
    rateLimit.set(key, { count: 1, timestamp: now })
    return true
  }

  if (now - record.timestamp > windowMs) {
    rateLimit.set(key, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

export function resetRateLimit(key: string) {
  rateLimit.delete(key)
}