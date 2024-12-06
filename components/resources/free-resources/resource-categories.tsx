"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const categories = [
  "All",
  "Study Planning",
  "Biology",
  "Chemistry",
  "PAT",
  "Reading",
  "Test Strategy"
]

export function ResourceCategories() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          className={cn(
            "rounded-full",
            selectedCategory === category && "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}