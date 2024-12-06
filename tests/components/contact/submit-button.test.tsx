import { render, screen } from '@testing-library/react'
import { SubmitButton } from '@/components/contact/form/submit-button'

describe('SubmitButton', () => {
  it('shows "Send Message" when not submitting', () => {
    render(<SubmitButton isSubmitting={false} />)
    expect(screen.getByRole('button')).toHaveTextContent('Send Message')
    expect(screen.getByRole('button')).not.toBeDisabled()
  })

  it('shows "Sending..." when submitting', () => {
    render(<SubmitButton isSubmitting={true} />)
    expect(screen.getByRole('button')).toHaveTextContent('Sending...')
    expect(screen.getByRole('button')).toBeDisabled()
  })
})