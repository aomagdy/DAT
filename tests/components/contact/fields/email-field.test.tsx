import { render, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { EmailField } from '@/components/contact/form/fields/email-field'

function TestWrapper() {
  const form = useForm({
    defaultValues: { email: '' }
  })
  return <EmailField form={form} />
}

describe('EmailField', () => {
  it('renders email input field', () => {
    render(<TestWrapper />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your\.email@example\.com/i)).toBeInTheDocument()
  })

  it('has type="email"', () => {
    render(<TestWrapper />)
    expect(screen.getByPlaceholderText(/your\.email@example\.com/i)).toHaveAttribute('type', 'email')
  })
})