"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/5 to-[#00BFA5]/5" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl">
            Ready to Elevate Your DAT Prep?
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Join the future of dental admissions test preparation
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#0052CC] hover:bg-[#0052CC]/90 text-white"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5]/10"
              >
                Talk to an Expert
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}