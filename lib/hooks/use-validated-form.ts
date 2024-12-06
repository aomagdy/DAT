"use client"

import { useState } from 'react'
import { useForm, UseFormProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useToast } from '@/components/ui/use-toast'
import { FormValidator } from '@/lib/validation/form-validator'
import { ValidationError } from '@/lib/utils/error'

interface UseValidatedFormOptions<T extends z.ZodType> extends UseFormProps<z.infer<T>> {
  schema: T
  onSubmit: (data: z.infer<T>) => Promise<void>
  onError?: (error: Error) => void
}

export function useValidatedForm<T extends z.ZodType>({
  schema,
  onSubmit,
  onError,
  ...formOptions
}: UseValidatedFormOptions<T>) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const validator = new FormValidator(schema)

  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    ...formOptions
  })

  const handleSubmit = async (data: z.infer<T>) => {
    setIsSubmitting(true)
    try {
      // Validate data before submission
      const validatedData = await validator.validate(data)
      await onSubmit(validatedData)
    } catch (error) {
      if (error instanceof ValidationError) {
        error.metadata?.errors?.forEach(({ path, message }) => {
          form.setError(path as any, { message })
        })
      }

      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Form submission failed',
        variant: 'destructive'
      })

      if (onError) {
        onError(error instanceof Error ? error : new Error('Form submission failed'))
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(handleSubmit),
    validator
  }
}