"use client"

import { Card } from "@/components/ui/card"
import { useCarousel } from "@/hooks/use-carousel"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    content: "The adaptive learning system helped me focus on my weak areas and improved my score by 5 points!",
    author: "Sarah Chen",
    score: "24 AA",
    school: "Harvard School of Dental Medicine",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    content: "The 3D models and interactive content made complex topics much easier to understand.",
    author: "Michael Rodriguez",
    score: "23 AA",
    school: "UCLA School of Dentistry",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    content: "Having 24/7 access to the AI tutor kept my momentum going throughout my preparation.",
    author: "Emily Thompson",
    score: "25 AA",
    school: "UPenn School of Dental Medicine",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
]

export function TestimonialsSection() {
  const { emblaRef, selectedIndex, scrollPrev, scrollNext } = useCarousel()

  return (
    <section className="container py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4">
          Student Success Stories
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of successful students who achieved their dream scores
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-primary text-sm">{testimonial.score}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.school}</div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </blockquote>
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
            <div
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                index === selectedIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}