import speakeasy from "speakeasy"
import QRCode from "qrcode"

export async function generateTwoFactorSecret() {
  const secret = speakeasy.generateSecret({
    name: "DATGenius",
    issuer: "DATGenius"
  })

  const qrCode = await QRCode.toDataURL(secret.otpauth_url!)

  return {
    secret: secret.base32,
    qrCode
  }
}

export function verify2FAToken(secret: string, token: string) {
  return speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token,
    window: 1
  })
}

export function generateBackupCodes() {
  const codes = []
  for (let i = 0; i < 10; i++) {
    codes.push(speakeasy.generateSecret({ length: 10 }).base32)
  }
  return codes
}