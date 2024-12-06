import { describe, it, expect } from 'vitest'
import { api } from '@/lib/api/client'

describe('Auth API', () => {
  it('should login with valid credentials', async () => {
    const response = await api.auth.login({
      email: 'test@example.com',
      password: 'password123'
    })

    expect(response.status).toBe(200)
    expect(response.data).toHaveProperty('token')
    expect(response.data).toHaveProperty('user')
  })

  it('should fail with invalid credentials', async () => {
    try {
      await api.auth.login({
        email: 'wrong@example.com',
        password: 'wrongpass'
      })
    } catch (error: any) {
      expect(error.response.status).toBe(401)
      expect(error.response.data).toHaveProperty('error')
    }
  })
})