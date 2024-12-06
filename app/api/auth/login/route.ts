import { NextResponse } from 'next/server'
import { z } from 'zod'
import { env } from '@/lib/config/env'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = loginSchema.parse(body)

    // Demo authentication - replace with your actual auth logic
    if (email === 'test@example.com' && password === 'password123') {
      return NextResponse.json({
        user: {
          id: '1',
          email,
          name: 'Test User'
        },
        token: 'demo-token'
      })
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}