export interface User {
  id: string
  email: string
  name: string | null
  image: string | null
  role: UserRole
  emailVerified: Date | null
  createdAt: Date
  updatedAt: Date
}

export type UserRole = 'admin' | 'instructor' | 'student' | 'guest'

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  notifications: boolean
  emailFrequency: 'daily' | 'weekly' | 'monthly'
}

export interface Session {
  user: {
    id: string
    email: string
    name: string | null
    role: UserRole
  }
  expires: string
}