"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCarousel } from "@/hooks/use-carousel"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    content: "The adaptive learning system was a game-changer. It identified my weak areas and helped me focus my study time effectively.",
    author: "Emily Thompson",
    score: "24 AA",
    school: "Columbia University College of Dental Medicine"
  },
  {
    content: "The practice tests were incredibly similar to the actual DAT. I felt well-prepared and confident on test day.",
    author: "Michael Chen",
    score: "23 AA",
    school: "University of Michigan School of Dentistry"
  },
  {
    content: "The 3D models and interactive content made complex topics much easier to understand. My PAT score improved significantly.",
    author: "Sarah Rodriguez",
    score: "25 AA",
    school: "UCSF School of Dentistry"
  },
  {
    content: "Having 24/7 access to the AI tutor was invaluable. I could get help whenever I needed it, which kept my momentum going.",
    author: "David Park",
    score: "22 AA",
    school: "Boston University Henry M. Goldman School of Dental Medicine"
  }
]

export function TestimonialCarousel() {
  const { emblaRef, selectedIndex, scrollPrev, scrollNext } = useCarousel()

  return (
    <div className="relative">
      <h2 className="text-3xl font-heading font-bold text-center mb-12">
        What Our Students Say
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <Card className="h-full p-6">
                <blockquote className="mb-6">
                  <p className="text-lg italic text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                </blockquote>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-primary">{testimonial.score}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.school}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === selectedIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
    </div>
  )
}