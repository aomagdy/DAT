"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

interface PasswordStrengthIndicatorProps {
  password: string
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const getStrength = (password: string) => {
    let score = 0
    if (!password) return score

    // Award points for length
    if (password.length >= 8) score += 25
    if (password.length >= 12) score += 10

    // Award points for complexity
    if (/[A-Z]/.test(password)) score += 15
    if (/[a-z]/.test(password)) score += 15
    if (/[0-9]/.test(password)) score += 15
    if (/[^A-Za-z0-9]/.test(password)) score += 20

    return Math.min(100, score)
  }

  const getColor = (strength: number) => {
    if (strength >= 80) return "bg-green-500"
    if (strength >= 60) return "bg-yellow-500"
    if (strength >= 30) return "bg-orange-500"
    return "bg-red-500"
  }

  const strength = getStrength(password)
  const color = getColor(strength)

  return (
    <div className="space-y-2">
      <Progress value={strength} className={color} />
      <ul className="text-xs space-y-1 text-muted-foreground">
        <li className={password.length >= 8 ? "text-green-500" : ""}>
          • At least 8 characters
        </li>
        <li className={/[A-Z]/.test(password) ? "text-green-500" : ""}>
          • At least one uppercase letter
        </li>
        <li className={/[a-z]/.test(password) ? "text-green-500" : ""}>
          • At least one lowercase letter
        </li>
        <li className={/[0-9]/.test(password) ? "text-green-500" : ""}>
          • At least one number
        </li>
        <li className={/[^A-Za-z0-9]/.test(password) ? "text-green-500" : ""}>
          • At least one special character
        </li>
      </ul>
    </div>
  )
}