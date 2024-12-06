import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { log } from '@/lib/logger'
import { getSession } from 'next-auth/react'

const TIMEOUT = 10000
const RETRY_ATTEMPTS = 3
const RETRY_DELAY = 1000

export class ApiClient {
  private static instance: ApiClient
  private baseURL: string
  private retryCount: number = 0

  private constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || '/api'
    this.setupInterceptors()
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  private async getAuthHeader(): Promise<Record<string, string>> {
    const session = await getSession()
    return session?.user ? { Authorization: `Bearer ${session.user.id}` } : {}
  }

  private setupInterceptors() {
    axios.interceptors.request.use(
      async (config) => {
        const authHeader = await this.getAuthHeader()
        return {
          ...config,
          headers: {
            ...config.headers,
            ...authHeader,
            'Content-Type': 'application/json'
          },
          timeout: TIMEOUT
        }
      },
      (error) => Promise.reject(error)
    )

    axios.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (!error.config || this.retryCount >= RETRY_ATTEMPTS) {
          return Promise.reject(error)
        }

        if (error.response?.status === 401) {
          // Handle unauthorized access
          window.location.href = '/login'
          return Promise.reject(error)
        }

        this.retryCount++
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * this.retryCount))
        return axios(error.config)
      }
    )
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axios.get<T>(`${this.baseURL}${endpoint}`, config)
      return response.data
    } catch (error) {
      this.handleError(error)
      throw error
    }
  }

  async post<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axios.post<T>(`${this.baseURL}${endpoint}`, data, config)
      return response.data
    } catch (error) {
      this.handleError(error)
      throw error
    }
  }

  async put<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axios.put<T>(`${this.baseURL}${endpoint}`, data, config)
      return response.data
    } catch (error) {
      this.handleError(error)
      throw error
    }
  }

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axios.delete<T>(`${this.baseURL}${endpoint}`, config)
      return response.data
    } catch (error) {
      this.handleError(error)
      throw error
    }
  }

  private handleError(error: unknown) {
    if (axios.isAxiosError(error)) {
      log.error('API Error:', {
        status: error.response?.status,
        message: error.message,
        endpoint: error.config?.url
      })
    } else {
      log.error('Unexpected API error:', error)
    }
  }
}

export const api = ApiClient.getInstance()