import DOMPurify from 'isomorphic-dompurify'
import { z } from 'zod'

export const sanitizeHtml = (dirty: string): string => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href', 'title', 'target']
  })
}

export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '')
}

export const inputSchema = z.object({
  text: z.string().min(1).transform(sanitizeInput),
  html: z.string().min(1).transform(sanitizeHtml),
  email: z.string().email().toLowerCase().trim(),
  url: z.string().url().toLowerCase().trim()
})