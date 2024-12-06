"use client"

import { useCallback } from 'react'
import { UseFormReturn } from 'react-hook-form'

interface UseFormFieldProps {
  form: UseFormReturn<any>
  name: string
}

export function useFormField({ form, name }: UseFormFieldProps) {
  const error = form.formState.errors[name]
  const isLoading = form.formState.isSubmitting
  const isDirty = form.formState.dirtyFields[name]
  const isTouched = form.formState.touchedFields[name]

  const getValue = useCallback(() => {
    return form.getValues(name)
  }, [form, name])

  const setValue = useCallback((value: any) => {
    form.setValue(name, value, { shouldValidate: true })
  }, [form, name])

  const clearValue = useCallback(() => {
    form.setValue(name, '', { shouldValidate: true })
  }, [form, name])

  return {
    error,
    isLoading,
    isDirty,
    isTouched,
    getValue,
    setValue,
    clearValue
  }
}