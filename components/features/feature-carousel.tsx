"use client"

import * as React from "react"
import { features } from "./feature-data"
import { useCarousel } from "@/hooks/use-carousel"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CarouselControls } from "./carousel-controls"
import { FeatureCard } from "./feature-card"

export function FeatureCarousel() {
  const { emblaRef, selectedIndex, scrollPrev, scrollNext, scrollTo } = useCarousel()
  const [containerRef, entry] = useIntersectionObserver()
  const isVisible = entry?.isIntersecting

  return (
    <section 
      className="py-24 bg-muted/30"
      ref={containerRef as React.RefObject<HTMLElement>}
      aria-label="Feature Carousel"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful tools and features that make DATGenius the leading DAT preparation platform
          </p>
        </div>

        <div className="relative">
          <div 
            className="overflow-hidden" 
            ref={emblaRef}
            aria-roledescription="carousel"
          >
            <div className="flex">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${features.length}`}
                >
                  <FeatureCard {...feature} isVisible={isVisible} />
                </div>
              ))}
            </div>
          </div>

          <CarouselControls
            onPrevClick={scrollPrev}
            onNextClick={scrollNext}
            selectedIndex={selectedIndex}
            totalSlides={features.length}
            onDotClick={scrollTo}
          />
        </div>
      </div>
    </section>
  )
}