import { z } from 'zod'
import { contactFormSchema } from '@/components/contact/form/contact-form-schema'

export type ContactFormData = z.infer<typeof contactFormSchema>

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'textarea'
  placeholder?: string
  required?: boolean
  validation?: {
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    message?: string
  }
}

export interface FormProps<T> {
  onSubmit: (data: T) => Promise<void>
  isSubmitting?: boolean
  defaultValues?: Partial<T>
}