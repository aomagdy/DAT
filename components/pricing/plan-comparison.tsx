"use client"

import { Check, Minus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

interface Feature {
  name: string
  description: string
  basic: boolean
  standard: boolean
  premium: boolean
}

const features: Feature[] = [
  {
    name: "Practice Questions",
    description: "Access to our question bank",
    basic: true,
    standard: true,
    premium: true
  },
  {
    name: "Study Planner",
    description: "Personalized study schedule",
    basic: true,
    standard: true,
    premium: true
  },
  {
    name: "Performance Analytics",
    description: "Track your progress and identify areas for improvement",
    basic: true,
    standard: true,
    premium: true
  },
  {
    name: "Mobile App Access",
    description: "Study on the go with our mobile app",
    basic: true,
    standard: true,
    premium: true
  },
  {
    name: "AI-Powered Study Plans",
    description: "Adaptive learning paths based on your performance",
    basic: false,
    standard: true,
    premium: true
  },
  {
    name: "Video Lessons Library",
    description: "Full access to our video content",
    basic: false,
    standard: true,
    premium: true
  },
  {
    name: "3D Model Visualizations",
    description: "Interactive 3D models for better understanding",
    basic: false,
    standard: true,
    premium: true
  },
  {
    name: "Practice Tests",
    description: "Full-length practice exams with detailed analytics",
    basic: false,
    standard: true,
    premium: true
  },
  {
    name: "Live Q&A Sessions",
    description: "Weekly live sessions with expert tutors",
    basic: false,
    standard: true,
    premium: true
  },
  {
    name: "1-on-1 Tutoring",
    description: "Personal tutoring sessions",
    basic: false,
    standard: false,
    premium: true
  },
  {
    name: "Score Guarantee",
    description: "Money-back guarantee if your score doesn't improve",
    basic: false,
    standard: false,
    premium: true
  },
  {
    name: "Custom Study Materials",
    description: "Personalized study materials based on your needs",
    basic: false,
    standard: false,
    premium: true
  }
]

export function PlanComparison() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-heading font-bold text-center mb-8">
        Compare Plan Features
      </h2>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Feature</TableHead>
              <TableHead className="text-center">Basic</TableHead>
              <TableHead className="text-center">Standard</TableHead>
              <TableHead className="text-center">Premium</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div>
                    {feature.name}
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {feature.basic ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {feature.standard ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {feature.premium ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}