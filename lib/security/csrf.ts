import { randomBytes } from 'crypto'

export function generateCSRFToken(): string {
  return randomBytes(32).toString('hex')
}

export function validateCSRFToken(token: string, storedToken: string): boolean {
  if (!token || !storedToken) return false
  return token === storedToken
}

export function getCSRFTokenFromHeader(headers: Headers): string | null {
  return headers.get('x-csrf-token')
}