"use client"

import { useEffect } from "react"
import { FormField } from "./form-field"
import { useFormValidation } from "@/lib/hooks/use-form-validation"
import { z } from "zod"

interface ValidatedFieldProps {
  form: any
  name: string
  label: string
  type?: "text" | "email" | "password" | "textarea"
  placeholder?: string
  className?: string
  required?: boolean
  validation?: z.ZodType<any>
  onValidationChange?: (isValid: boolean) => void
}

export function ValidatedField({
  form,
  validation,
  onValidationChange,
  ...props
}: ValidatedFieldProps) {
  const { validateField } = useFormValidation({
    form,
    schema: validation ? z.object({ [props.name]: validation }) : z.object({}),
    onValidationChange
  })

  useEffect(() => {
    if (validation) {
      const value = form.getValues(props.name)
      validateField(props.name, value)
    }
  }, [form, props.name, validateField, validation])

  return <FormField form={form} {...props} />
}