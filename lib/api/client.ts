import axios from 'axios'
import { APP_CONFIG } from '@/lib/config/constants'

export const apiClient = axios.create({
  baseURL: APP_CONFIG.api.baseUrl,
  timeout: APP_CONFIG.api.timeout,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  async (config) => {
    // Add auth token if available
    const token = localStorage.getItem('auth-token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('auth-token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const api = {
  auth: {
    login: (data: { email: string; password: string }) =>
      apiClient.post('/auth/login', data),
    register: (data: { email: string; password: string; name: string }) =>
      apiClient.post('/auth/register', data),
    verify: (token: string) =>
      apiClient.post('/auth/verify', { token })
  },
  user: {
    getProfile: () => apiClient.get('/user/profile'),
    updateProfile: (data: any) => apiClient.put('/user/profile', data)
  },
  courses: {
    getAll: () => apiClient.get('/courses'),
    getById: (id: string) => apiClient.get(`/courses/${id}`),
    enroll: (courseId: string) => apiClient.post(`/courses/${courseId}/enroll`)
  }
}