import { authenticator } from "otplib"
import QRCode from "qrcode"
import { randomBytes } from "crypto"

export interface TwoFactorSecret {
  secret: string
  qrCode: string
  backupCodes: string[]
  recoveryCodes: string[]
}

export async function generateTwoFactorSecret(
  email: string,
  issuer = "DATGenius"
): Promise<TwoFactorSecret> {
  // Generate secret
  const secret = authenticator.generateSecret()

  // Generate QR code
  const otpauth = authenticator.keyuri(email, issuer, secret)
  const qrCode = await QRCode.toDataURL(otpauth)

  // Generate backup codes
  const backupCodes = Array.from({ length: 10 }, () =>
    randomBytes(4).toString("hex").toUpperCase()
  )

  // Generate recovery codes (longer, for account recovery)
  const recoveryCodes = Array.from({ length: 5 }, () =>
    randomBytes(8).toString("hex").toUpperCase()
  )

  return {
    secret,
    qrCode,
    backupCodes,
    recoveryCodes
  }
}

export function verifyTwoFactorToken(
  token: string,
  secret: string
): boolean {
  try {
    return authenticator.verify({
      token,
      secret
    })
  } catch {
    return false
  }
}

export function verifyBackupCode(
  code: string,
  validCodes: string[]
): boolean {
  return validCodes.includes(code.toUpperCase())
}

export function generateRecoveryToken(): string {
  return randomBytes(32).toString("hex")
}