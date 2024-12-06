"use client"

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"

const categories = [
  {
    name: "Biology",
    total: 450,
    mastered: 380,
    color: "bg-green-500"
  },
  {
    name: "General Chemistry",
    total: 300,
    mastered: 210,
    color: "bg-blue-500"
  },
  {
    name: "Organic Chemistry",
    total: 250,
    mastered: 150,
    color: "bg-purple-500"
  },
  {
    name: "Perceptual Ability",
    total: 200,
    mastered: 160,
    color: "bg-yellow-500"
  },
  {
    name: "Reading Comprehension",
    total: 150,
    mastered: 120,
    color: "bg-red-500"
  },
  {
    name: "Quantitative Reasoning",
    total: 180,
    mastered: 130,
    color: "bg-indigo-500"
  }
]

export function FlashcardCategories() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-heading font-bold mb-4">Categories</h3>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-sm text-muted-foreground">
                  {category.mastered}/{category.total}
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${category.color} transition-all`}
                  style={{ 
                    width: `${(category.mastered / category.total) * 100}%`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}