export interface ApiResponse<T = any> {
  data: T
  message?: string
  status: number
}

export interface ApiError {
  code: string
  message: string
  status: number
  details?: Record<string, any>
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface QueryParams {
  page?: number
  pageSize?: number
  sort?: string
  order?: 'asc' | 'desc'
  search?: string
  filters?: Record<string, any>
}