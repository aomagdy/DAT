"use client"

import { useCallback, useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { useDebounce } from './use-debounce'

interface UseFormValidationProps<T extends z.ZodType> {
  form: UseFormReturn<z.infer<T>>
  schema: T
  onValidationChange?: (isValid: boolean) => void
}

export function useFormValidation<T extends z.ZodType>({
  form,
  schema,
  onValidationChange
}: UseFormValidationProps<T>) {
  const values = form.watch()
  const debouncedValues = useDebounce(values, 300)

  const validateField = useCallback(async (
    field: keyof z.infer<T>,
    value: any
  ) => {
    try {
      const fieldSchema = schema.shape[field as string]
      await fieldSchema.parseAsync(value)
      form.clearErrors(field as string)
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        form.setError(field as string, {
          type: 'validation',
          message: error.errors[0]?.message
        })
      }
      return false
    }
  }, [form, schema])

  const validateForm = useCallback(async (data: z.infer<T>) => {
    try {
      await schema.parseAsync(data)
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          const field = err.path[0]
          form.setError(field as string, {
            type: 'validation',
            message: err.message
          })
        })
      }
      return false
    }
  }, [form, schema])

  useEffect(() => {
    const validate = async () => {
      const isValid = await validateForm(debouncedValues)
      onValidationChange?.(isValid)
    }

    validate()
  }, [debouncedValues, validateForm, onValidationChange])

  return {
    validateField,
    validateForm,
    isValid: Object.keys(form.formState.errors).length === 0
  }
}