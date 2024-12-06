"use client"

import { useCarousel } from "@/hooks/use-carousel"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { features } from "./feature-data"

export function FeatureCarousel() {
  const { emblaRef, selectedIndex, scrollPrev, scrollNext, scrollTo } = useCarousel()

  return (
    <section className="container py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4">
          Core Features
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the powerful tools and features that make DATGenius the leading DAT preparation platform
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Card className="p-6 h-full">
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </Card>
                </div>
              )
            })}
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
          {features.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                index === selectedIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}