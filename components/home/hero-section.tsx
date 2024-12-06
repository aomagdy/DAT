"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="px-4 pt-16 pb-8 sm:px-6 sm:pt-24 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
          Transform Your DAT Prep with
          <span className="text-primary"> Personalized AI Learning</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Empower your journey to dental school with adaptive learning, immersive technology, and personalized support.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/features">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}