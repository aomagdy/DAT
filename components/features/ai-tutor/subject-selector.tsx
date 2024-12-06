"use client"

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const subjects = [
  {
    name: "Biology",
    topics: ["Cell Biology", "Genetics", "Anatomy", "Physiology"],
    available: true
  },
  {
    name: "General Chemistry",
    topics: ["Atomic Structure", "Chemical Bonding", "Thermodynamics"],
    available: true
  },
  {
    name: "Organic Chemistry",
    topics: ["Functional Groups", "Reactions", "Mechanisms"],
    available: true
  },
  {
    name: "Perceptual Ability",
    topics: ["Spatial Visualization", "Angle Ranking", "Pattern Folding"],
    available: true
  },
  {
    name: "Reading Comprehension",
    topics: ["Scientific Passages", "Academic Articles"],
    available: true
  },
  {
    name: "Quantitative Reasoning",
    topics: ["Problem Solving", "Data Analysis", "Mathematics"],
    available: true
  }
]

export function SubjectSelector() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-heading font-bold mb-4">Available Subjects</h3>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className={cn(
                "p-3 rounded-lg transition-colors hover:bg-muted",
                !subject.available && "opacity-50"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{subject.name}</span>
                {subject.available && <Check className="h-4 w-4 text-green-500" />}
              </div>
              <div className="text-sm text-muted-foreground">
                {subject.topics.join(" • ")}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}