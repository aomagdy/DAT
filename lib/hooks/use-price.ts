"use client"

import { useEffect, useState } from 'react'
import { Locale, currencies, currencySymbols, localePricing } from '@/lib/i18n/config'

interface UsePriceOptions {
  basePrice: number
  locale?: Locale
  promoCode?: string
}

export function usePrice({ basePrice, locale = 'en', promoCode }: UsePriceOptions) {
  const [finalPrice, setFinalPrice] = useState(basePrice)
  const [discount, setDiscount] = useState(0)
  const currency = currencies[locale]
  const symbol = currencySymbols[currency]

  useEffect(() => {
    const calculatePrice = async () => {
      if (promoCode) {
        try {
          const response = await fetch('/api/validate-promo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: promoCode }),
          })
          const { discount } = await response.json()
          setDiscount(discount)
          setFinalPrice(basePrice * (1 - discount))
        } catch (error) {
          console.error('Error validating promo code:', error)
          setDiscount(0)
          setFinalPrice(basePrice)
        }
      } else {
        setDiscount(0)
        setFinalPrice(basePrice)
      }
    }

    calculatePrice()
  }, [basePrice, promoCode])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return {
    originalPrice: formatPrice(basePrice),
    finalPrice: formatPrice(finalPrice),
    discount,
    symbol,
  }
}