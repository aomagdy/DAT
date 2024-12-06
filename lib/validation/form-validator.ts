import { z } from 'zod'
import { ValidationError } from '@/lib/utils/error'

export class FormValidator<T extends z.ZodType> {
  constructor(private schema: T) {}

  async validate(data: unknown): Promise<z.infer<T>> {
    try {
      return await this.schema.parseAsync(data)
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new ValidationError('Validation failed', {
          errors: error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message
          }))
        })
      }
      throw error
    }
  }

  validateSync(data: unknown): z.infer<T> {
    try {
      return this.schema.parse(data)
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new ValidationError('Validation failed', {
          errors: error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message
          }))
        })
      }
      throw error
    }
  }

  getFieldError(data: unknown, field: keyof z.infer<T>): string | null {
    try {
      this.validateSync(data)
      return null
    } catch (error) {
      if (error instanceof ValidationError) {
        const fieldError = error.metadata?.errors?.find(
          err => err.path === field
        )
        return fieldError?.message || null
      }
      return null
    }
  }
}