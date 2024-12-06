import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('submits contact form successfully', async ({ page }) => {
    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('input[name="subject"]', 'Test Subject')
    await page.fill('textarea[name="message"]', 'This is a test message')

    await page.click('button[type="submit"]')

    await expect(page.getByText('Message sent successfully')).toBeVisible()
  })

  test('shows validation errors', async ({ page }) => {
    await page.click('button[type="submit"]')

    await expect(page.getByText(/name must be at least/i)).toBeVisible()
    await expect(page.getByText(/please enter a valid email/i)).toBeVisible()
    await expect(page.getByText(/subject must be at least/i)).toBeVisible()
    await expect(page.getByText(/message must be at least/i)).toBeVisible()
  })
})