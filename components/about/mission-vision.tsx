"use client"

import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Heart, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower aspiring dental professionals with innovative, personalized learning solutions that maximize their potential and pave the way for their success."
  },
  {
    icon: Lightbulb,
    title: "Vision",
    description: "To be the global leader in dental education technology, setting new standards for interactive learning and student achievement."
  },
  {
    icon: Heart,
    title: "Values",
    description: "Innovation, excellence, student success, and continuous improvement guide everything we do."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive community of learners and educators dedicated to advancing dental education."
  }
]

export function MissionVision() {
  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Mission & Vision
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Guided by our commitment to excellence and innovation in dental education
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold">{value.title}</h3>
              </div>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}