"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$99",
    period: "month",
    description: "Essential DAT prep tools for focused students",
    features: [
      "1,000+ practice questions",
      "Basic study planner",
      "Subject review materials",
      "Performance tracking"
    ]
  },
  {
    name: "Premium",
    price: "$149",
    period: "month",
    popular: true,
    description: "Comprehensive preparation with advanced features",
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
    name: "Ultimate",
    price: "$199",
    period: "month",
    description: "Maximum support for serious DAT candidates",
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
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00BFA5]">
                Most Popular
              </Badge>
            )}
            <div className="mb-4">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="space-y-3 flex-1">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-4 w-4 text-[#00BFA5] mr-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/pricing">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#00BFA5] hover:bg-[#00BFA5]/90"
                      : ""
                  }`}
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