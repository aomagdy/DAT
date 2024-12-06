import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UseFormReturn } from 'react-hook-form'
import { ContactFormData } from './contact-form-schema'

interface FormFieldProps {
  form: UseFormReturn<ContactFormData>
  name: keyof ContactFormData
  label: string
  type?: 'text' | 'email' | 'textarea'
  placeholder?: string
}

export function FormFieldComponent({
  form,
  name,
  label,
  type = 'text',
  placeholder
}: FormFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type === 'textarea' ? (
              <Textarea 
                placeholder={placeholder}
                className="min-h-[150px]"
                {...field}
              />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}