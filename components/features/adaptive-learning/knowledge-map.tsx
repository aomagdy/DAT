"use client"

import { Card } from "@/components/ui/card"

const topics = [
  { name: "Biology", progress: 85 },
  { name: "General Chemistry", progress: 78 },
  { name: "Organic Chemistry", progress: 72 },
  { name: "Perceptual Ability", progress: 90 },
  { name: "Reading Comprehension", progress: 88 },
  { name: "Quantitative Reasoning", progress: 82 },
]

export function KnowledgeMap() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-heading font-bold mb-6">Knowledge Map</h3>
      <div className="grid gap-4">
        {topics.map((topic) => (
          <div key={topic.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{topic.name}</span>
              <span className="text-sm text-muted-foreground">{topic.progress}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${topic.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}