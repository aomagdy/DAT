import { randomBytes, createCipheriv, createDecipheriv, scrypt } from 'crypto'
import { promisify } from 'util'

const scryptAsync = promisify(scrypt)

interface EncryptedData {
  iv: string
  data: string
}

export class Encryption {
  private static readonly ALGORITHM = 'aes-256-gcm'
  private static readonly KEY_LENGTH = 32

  static async encrypt(data: string, secretKey: string): Promise<EncryptedData> {
    try {
      const iv = randomBytes(16)
      const salt = randomBytes(16)
      const key = await scryptAsync(secretKey, salt, this.KEY_LENGTH)

      const cipher = createCipheriv(this.ALGORITHM, key, iv)
      let encrypted = cipher.update(data, 'utf8', 'hex')
      encrypted += cipher.final('hex')

      const authTag = cipher.getAuthTag()

      return {
        iv: iv.toString('hex'),
        data: salt.toString('hex') + ':' + encrypted + ':' + authTag.toString('hex')
      }
    } catch (error) {
      console.error('Encryption failed:', error)
      throw new Error('Failed to encrypt data')
    }
  }

  static async decrypt(encryptedData: EncryptedData, secretKey: string): Promise<string> {
    try {
      const iv = Buffer.from(encryptedData.iv, 'hex')
      const [salt, encrypted, authTag] = encryptedData.data.split(':')
      
      const key = await scryptAsync(secretKey, Buffer.from(salt, 'hex'), this.KEY_LENGTH)
      const decipher = createDecipheriv(this.ALGORITHM, key, iv)
      
      decipher.setAuthTag(Buffer.from(authTag, 'hex'))
      
      let decrypted = decipher.update(encrypted, 'hex', 'utf8')
      decrypted += decipher.final('utf8')
      
      return decrypted
    } catch (error) {
      console.error('Decryption failed:', error)
      throw new Error('Failed to decrypt data')
    }
  }

  static async encryptField<T extends Record<string, any>>(
    obj: T,
    field: keyof T,
    secretKey: string
  ): Promise<T> {
    if (typeof obj[field] === 'string') {
      const encrypted = await this.encrypt(obj[field] as string, secretKey)
      return {
        ...obj,
        [field]: encrypted
      }
    }
    return obj
  }

  static async decryptField<T extends Record<string, any>>(
    obj: T,
    field: keyof T,
    secretKey: string
  ): Promise<T> {
    if (obj[field] && typeof obj[field] === 'object') {
      const decrypted = await this.decrypt(obj[field] as EncryptedData, secretKey)
      return {
        ...obj,
        [field]: decrypted
      }
    }
    return obj
  }
}