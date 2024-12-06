"use client"

import * as React from "react"
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react"

interface UseCarouselProps {
  loop?: boolean
  align?: "start" | "center"
  skipSnaps?: boolean
}

export function useCarousel({
  loop = true,
  align = "center",
  skipSnaps = false,
}: UseCarouselProps = {}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align, skipSnaps })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return {
    emblaRef,
    selectedIndex,
    scrollPrev,
    scrollNext,
    scrollTo,
  }
}