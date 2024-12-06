"use client"

import { Card } from "@/components/ui/card"

interface DefinitionBoxProps {
  term: string
  definition: string
}

export function DefinitionBox({ term, definition }: DefinitionBoxProps) {
  return (
    <Card className="p-4 bg-muted/50">
      <div className="font-medium text-lg mb-2">{term}</div>
      <p className="text-muted-foreground">{definition}</p>
    </Card>
  )
}