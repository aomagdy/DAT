import { z } from 'zod'
import { sanitizeInput } from '@/lib/security/sanitization'

export const loginSchema = z.object({
  email: z.string()
    .email("Please enter a valid email address")
    .transform(str => str.toLowerCase().trim()),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .transform(sanitizeInput),
  rememberMe: z.boolean().default(false)
})

export const registerSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .transform(sanitizeInput),
  email: z.string()
    .email("Please enter a valid email address")
    .transform(str => str.toLowerCase().trim()),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
    .transform(sanitizeInput),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>