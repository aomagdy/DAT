"use client"

import { ClipboardCheck, Brain, LineChart, UserPlus } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account and tell us about your goals and current preparation level."
  },
  {
    icon: ClipboardCheck,
    title: "Initial Assessment",
    description: "Take our comprehensive diagnostic test to identify your strengths and areas for improvement."
  },
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "Follow your AI-tailored study plan with adaptive content and practice questions."
  },
  {
    icon: LineChart,
    title: "Track Progress",
    description: "Monitor your improvement with detailed analytics and adjust your study strategy."
  }
]

export function HowItWorks() {
  return (
    <section className="container py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your journey to DAT success in four simple steps
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-muted -translate-y-1/2" />
        
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#0052CC] mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}