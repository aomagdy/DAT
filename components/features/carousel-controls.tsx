"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselControlsProps {
  onPrevClick: () => void
  onNextClick: () => void
  selectedIndex: number
  totalSlides: number
  onDotClick: (index: number) => void
}

export function CarouselControls({
  onPrevClick,
  onNextClick,
  selectedIndex,
  totalSlides,
  onDotClick,
}: CarouselControlsProps) {
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background"
        onClick={onPrevClick}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background"
        onClick={onNextClick}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div 
        className="flex justify-center gap-2 mt-8"
        role="tablist"
        aria-label="Carousel navigation"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === selectedIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
            )}
            onClick={() => onDotClick(index)}
            role="tab"
            aria-selected={index === selectedIndex}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}