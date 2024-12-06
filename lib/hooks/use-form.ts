import { useState } from 'react'
import { useForm as useHookForm, UseFormProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useToast } from '@/components/ui/use-toast'
import { useErrorHandler } from './use-error-handler'

interface UseFormOptions<T extends z.ZodType> {
  schema: T
  defaultValues?: z.infer<T>
  onSubmit: (data: z.infer<T>) => Promise<void>
}

export function useFormWithValidation<T extends z.ZodType>({
  schema,
  defaultValues,
  onSubmit
}: UseFormOptions<T>) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { handleError } = useErrorHandler()

  const form = useHookForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues
  })

  const handleSubmit = async (data: z.infer<T>) => {
    setIsSubmitting(true)
    try {
      await onSubmit(data)
      form.reset()
      toast({
        title: 'Success',
        description: 'Form submitted successfully'
      })
    } catch (error) {
      handleError(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(handleSubmit)
  }
}