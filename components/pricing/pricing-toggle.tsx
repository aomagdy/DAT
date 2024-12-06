"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface PricingToggleProps {
  isAnnual: boolean
  onToggle: (value: boolean) => void
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Label htmlFor="billing-switch" className="text-sm">Monthly</Label>
      <Switch
        id="billing-switch"
        checked={isAnnual}
        onCheckedChange={onToggle}
      />
      <div className="flex items-center gap-2">
        <Label htmlFor="billing-switch" className="text-sm">Annual</Label>
        <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
          Save 20%
        </span>
      </div>
    </div>
  )
}