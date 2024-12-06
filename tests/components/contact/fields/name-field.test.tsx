import { render, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { NameField } from '@/components/contact/form/fields/name-field'
import { contactFormSchema } from '@/components/contact/form/contact-form-schema'

function TestWrapper() {
  const form = useForm({
    defaultValues: { name: '' }
  })
  return <NameField form={form} />
}

describe('NameField', () => {
  it('renders name input field', () => {
    render(<TestWrapper />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument()
  })
})