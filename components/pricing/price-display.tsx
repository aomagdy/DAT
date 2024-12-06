"use client"

interface PriceDisplayProps {
  monthlyPrice: number
  annualPrice: number
  isAnnual: boolean
}

export function PriceDisplay({ monthlyPrice, annualPrice, isAnnual }: PriceDisplayProps) {
  const displayPrice = isAnnual ? annualPrice : monthlyPrice
  const annualTotal = annualPrice * 12

  return (
    <div className="mt-4">
      <span className="text-4xl font-bold">
        ${displayPrice}
      </span>
      <span className="text-muted-foreground">/month</span>
      {isAnnual && (
        <p className="text-sm text-muted-foreground mt-1">
          Billed annually (${annualTotal}/year)
        </p>
      )}
    </div>
  )
}