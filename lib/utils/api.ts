import axios from 'axios'

interface ApiError {
  message: string
  code?: string
  status?: number
}

export class ApiClient {
  private static instance: ApiClient
  private baseURL: string

  private constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || '/api'
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  private handleError(error: any): never {
    const apiError: ApiError = {
      message: 'An unexpected error occurred',
      status: error?.response?.status,
    }

    if (error?.response?.data?.message) {
      apiError.message = error.response.data.message
    }

    if (error?.response?.data?.code) {
      apiError.code = error.response.data.code
    }

    throw apiError
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    try {
      const response = await axios.get(`${this.baseURL}${endpoint}`, { params })
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    try {
      const response = await axios.post(`${this.baseURL}${endpoint}`, data)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    try {
      const response = await axios.put(`${this.baseURL}${endpoint}`, data)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  async delete<T>(endpoint: string): Promise<T> {
    try {
      const response = await axios.delete(`${this.baseURL}${endpoint}`)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }
}

export const api = ApiClient.getInstance()