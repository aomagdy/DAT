import { render, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { MessageField } from '@/components/contact/form/fields/message-field'

function TestWrapper() {
  const form = useForm({
    defaultValues: { message: '' }
  })
  return <MessageField form={form} />
}

describe('MessageField', () => {
  it('renders message textarea', () => {
    render(<TestWrapper />)
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/tell us more/i)).toBeInTheDocument()
  })

  it('has minimum height class', () => {
    render(<TestWrapper />)
    expect(screen.getByPlaceholderText(/tell us more/i)).toHaveClass('min-h-[150px]')
  })
})