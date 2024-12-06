"use client"

import { Form } from "@/components/ui/form"
import { useValidatedForm } from "@/lib/hooks/use-validated-form"
import { contactFormSchema } from "./contact-form-schema"
import { NameField, EmailField, MessageField } from "./fields"
import { SubmitButton } from "./submit-button"
import { Honeypot } from "../honeypot"

export function ContactForm() {
  const { form, isSubmitting, onSubmit } = useValidatedForm({
    schema: contactFormSchema,
    onSubmit: async (data) => {
      // Form submission logic here
      console.log("Form submitted:", data)
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        <NameField form={form} />
        <EmailField form={form} />
        <MessageField form={form} />
        <Honeypot />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </Form>
  )
}