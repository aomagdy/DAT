"use client"

import { Card } from "@/components/ui/card"
import { Award, Star, Shield, Trophy } from "lucide-react"

const awards = [
  {
    icon: Award,
    title: "Best EdTech Platform 2023",
    organization: "Education Technology Awards",
    description: "Recognized for innovation in adaptive learning technology"
  },
  {
    icon: Star,
    title: "Excellence in Student Success",
    organization: "National Education Association",
    description: "Highest student satisfaction rates in test preparation"
  },
  {
    icon: Shield,
    title: "Privacy & Security Champion",
    organization: "Digital Learning Council",
    description: "Outstanding commitment to student data protection"
  },
  {
    icon: Trophy,
    title: "Impact Award 2023",
    organization: "Dental Education Foundation",
    description: "Contributing to advancement in dental education"
  }
]

export function RecognitionSection() {
  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold mb-4">Recognition & Awards</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our commitment to excellence in education has been recognized by leading organizations
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {awards.map((award) => {
          const Icon = award.icon
          return (
            <Card key={award.title} className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">{award.title}</h3>
                  <p className="text-primary text-sm mb-2">{award.organization}</p>
                  <p className="text-muted-foreground">{award.description}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}