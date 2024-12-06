import { hash, compare } from "bcryptjs"
import zod from "zod"

// Password requirements schema
export const passwordSchema = zod.string()
  .min(12, "Password must be at least 12 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
  .refine(
    (password) => {
      // Check for common patterns and dictionary words
      const commonPatterns = [
        /password/i,
        /12345/,
        /qwerty/i,
        /admin/i,
        /letmein/i
      ]
      return !commonPatterns.some(pattern => pattern.test(password))
    },
    { message: "Password contains common patterns or words" }
  )

// Password history to prevent reuse
export interface PasswordHistory {
  hash: string
  createdAt: Date
}

export async function validatePassword(password: string): Promise<{
  isValid: boolean
  errors: string[]
}> {
  try {
    await passwordSchema.parseAsync(password)
    return { isValid: true, errors: [] }
  } catch (error) {
    if (error instanceof zod.ZodError) {
      return {
        isValid: false,
        errors: error.errors.map(e => e.message)
      }
    }
    return { isValid: false, errors: ["Invalid password"] }
  }
}

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12)
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return compare(password, hashedPassword)
}

export async function checkPasswordHistory(
  newPassword: string,
  passwordHistory: PasswordHistory[],
  maxHistory: number = 5
): Promise<boolean> {
  // Check against last 5 passwords
  const recentPasswords = passwordHistory
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, maxHistory)

  for (const historical of recentPasswords) {
    if (await compare(newPassword, historical.hash)) {
      return false // Password was used recently
    }
  }

  return true
}

export function calculatePasswordStrength(password: string): number {
  let score = 0

  // Length
  if (password.length >= 12) score += 25
  if (password.length >= 16) score += 10

  // Character types
  if (/[A-Z]/.test(password)) score += 15
  if (/[a-z]/.test(password)) score += 15
  if (/[0-9]/.test(password)) score += 15
  if (/[^A-Za-z0-9]/.test(password)) score += 20

  // Complexity
  if (/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(password)) {
    score += 15
  }

  return Math.min(100, score)
}