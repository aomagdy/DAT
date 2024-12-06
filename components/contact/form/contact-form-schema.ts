import { z } from 'zod'
import { sanitizeInput } from '@/lib/security/sanitization'

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .transform(sanitizeInput),
  email: z.string()
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),
  subject: z.string()
    .min(5, "Subject must be at least 5 characters")
    .transform(sanitizeInput),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .transform(sanitizeInput),
  website: z.string().optional() // Honeypot field
})

export type ContactFormData = z.infer<typeof contactFormSchema>