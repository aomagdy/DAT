"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const openings = [
  {
    title: "Senior Content Developer",
    department: "Education",
    location: "Remote",
    type: "Full-time",
    description: "Create engaging educational content and assessment materials for our DAT preparation platform."
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Develop and improve our adaptive learning algorithms and personalization systems."
  },
  {
    title: "UX Researcher",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Conduct user research to improve the learning experience on our platform."
  },
  {
    title: "Student Success Manager",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    description: "Support students in their DAT preparation journey and gather feedback for improvement."
  }
]

export function CareersSection() {
  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold mb-4">Join Our Team</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Help us transform dental education and make a difference in students' lives
        </p>
      </div>

      <div className="grid gap-6">
        {openings.map((job) => (
          <Card key={job.title} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-heading font-bold text-lg">{job.title}</h3>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <Link href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button>
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}