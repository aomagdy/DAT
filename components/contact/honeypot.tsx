"use client"

import { Input } from "@/components/ui/input"

export function Honeypot() {
  return (
    <div className="hidden" aria-hidden="true">
      <Input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />
    </div>
  )
}