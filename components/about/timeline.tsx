"use client"

import { Card } from "@/components/ui/card"

const milestones = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Founded by Dr. Sarah Chen and Dr. Michael Rodriguez with a vision to revolutionize DAT preparation."
  },
  {
    year: "2020",
    title: "AI Integration",
    description: "Launched our proprietary adaptive learning system, personalizing study plans for each student."
  },
  {
    year: "2021",
    title: "Platform Expansion",
    description: "Introduced interactive 3D models and virtual reality simulations for enhanced learning."
  },
  {
    year: "2022",
    title: "Community Growth",
    description: "Reached 10,000 active students and expanded our team of expert instructors."
  },
  {
    year: "2023",
    title: "Global Impact",
    description: "Launched international partnerships and achieved a 95% success rate among our students."
  }
]

export function Timeline() {
  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold mb-4">Our Story</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From a simple idea to a leading DAT preparation platform, follow our journey 
          of innovation and student success.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2" />
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <Card className={`w-1/2 p-6 ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"
                  style={{
                    [index % 2 === 0 ? "right" : "left"]: "-2.25rem"
                  }}
                />
                <div className="text-sm text-primary font-semibold mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground">
                  {milestone.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}