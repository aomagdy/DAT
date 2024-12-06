"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Clock, Award } from "lucide-react"

const metrics = [
  {
    icon: TrendingUp,
    value: "5+",
    label: "Average Score Improvement",
    description: "Points increase after using DATGenius"
  },
  {
    icon: Users,
    value: "15K+",
    label: "Success Stories",
    description: "Students achieved their target scores"
  },
  {
    icon: Clock,
    value: "3-4",
    label: "Months Average",
    description: "Preparation time with our platform"
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    description: "Students improved their scores"
  }
]

export function SuccessMetrics() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm font-medium">{metric.label}</div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}