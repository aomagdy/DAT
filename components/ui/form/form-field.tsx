"use client"

import { useFormField } from "@/lib/hooks/use-form-field"
import { FormField as FormFieldRoot, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  form: any
  name: string
  label: string
  type?: "text" | "email" | "password" | "textarea"
  placeholder?: string
  className?: string
  required?: boolean
}

export function FormField({
  form,
  name,
  label,
  type = "text",
  placeholder,
  className,
  required
}: FormFieldProps) {
  const { error, isLoading, isDirty } = useFormField({ form, name })

  return (
    <FormFieldRoot
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className={cn(required && "after:content-['*'] after:ml-1 after:text-destructive")}>
            {label}
          </FormLabel>
          <FormControl>
            {type === "textarea" ? (
              <Textarea
                {...field}
                placeholder={placeholder}
                className={cn(
                  error && "border-destructive",
                  isDirty && !error && "border-green-500"
                )}
                disabled={isLoading}
              />
            ) : (
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                className={cn(
                  error && "border-destructive",
                  isDirty && !error && "border-green-500"
                )}
                disabled={isLoading}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}