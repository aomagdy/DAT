"use client"

import { useEffect, useState } from 'react'

type Variant = 'A' | 'B'
type ExperimentConfig = {
  id: string
  variants: {
    A: any
    B: any
  }
}

export function useExperiment<T>(config: ExperimentConfig): T {
  const [variant, setVariant] = useState<Variant>('A')

  useEffect(() => {
    // Randomly assign variant (50/50)
    const assignedVariant: Variant = Math.random() < 0.5 ? 'A' : 'B'
    setVariant(assignedVariant)

    // Track experiment view
    trackExperimentView(config.id, assignedVariant)
  }, [config.id])

  return config.variants[variant]
}

function trackExperimentView(experimentId: string, variant: Variant) {
  // Implementation for your analytics platform
  console.log(`Experiment view: ${experimentId}, Variant: ${variant}`)
}