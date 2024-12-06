import { hash, compare } from 'bcryptjs'
import { randomBytes, createHash } from 'crypto'

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12)
}

export async function verifyPassword(
  password: string, 
  hashedPassword: string
): Promise<boolean> {
  return compare(password, hashedPassword)
}

export function generateToken(length = 32): string {
  return randomBytes(length).toString('hex')
}

export function hashToken(token: string): string {
  return createHash('sha256')
    .update(`${token}${process.env.NEXTAUTH_SECRET}`)
    .digest('hex')
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}