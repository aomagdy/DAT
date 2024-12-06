"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$99",
    description: "Essential DAT prep tools for focused students",
    features: [
      "1,000+ practice questions",
      "Basic study planner",
      "Subject review materials",
      "Performance tracking"
    ]
  },
  {
    name: "Standard",
    price: "$149",
    description: "Most popular choice for serious DAT candidates",
    popular: true,
    features: [
      "5,000+ practice questions",
      "AI-powered study planner",
      "Full video lessons library",
      "3D model visualizations",
      "Practice tests with analytics",
      "Live Q&A sessions"
    ]
  },
  {
    name: "Premium",
    price: "$199",
    description: "Comprehensive preparation with maximum support",
    features: [
      "10,000+ practice questions",
      "1-on-1 tutoring sessions",
      "Personalized study plan",
      "Unlimited practice tests",
      "Priority support access",
      "Score guarantee"
    ]
  }
]

export function PricingPreview() {
  return (
    <section className="container py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4">
          Choose Your Path to Success
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Select the perfect plan for your DAT preparation journey
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="relative flex flex-col p-6">
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Most Popular
              </Badge>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="space-y-3 flex-1">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/signup">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/pricing">
          <Button variant="outline" size="lg">
            View Detailed Pricing
          </Button>
        </Link>
      </div>
    </section>
  )
}