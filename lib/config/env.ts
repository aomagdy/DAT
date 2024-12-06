import { z } from 'zod'

const envSchema = z.object({
  // Next Auth
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  
  // Database
  DATABASE_URL: z.string().url(),
  
  // API Keys
  STRIPE_SECRET_KEY: z.string().optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  
  // Feature Flags
  ENABLE_ANALYTICS: z.coerce.boolean().default(false),
  MAINTENANCE_MODE: z.coerce.boolean().default(false),
})

export const env = envSchema.parse({
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  ENABLE_ANALYTICS: process.env.ENABLE_ANALYTICS,
  MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
})