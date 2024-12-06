"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react"

const flashcards = [
  {
    id: 1,
    front: "What is the role of ATP synthase in cellular respiration?",
    back: "ATP synthase is an enzyme that produces ATP using the energy from a proton gradient across the inner mitochondrial membrane during oxidative phosphorylation."
  },
  {
    id: 2,
    front: "Define hydrogen bonding and its importance in DNA structure.",
    back: "Hydrogen bonding is a type of intermolecular force between a hydrogen atom and an electronegative atom. In DNA, it forms between base pairs (A-T and G-C), helping maintain the double helix structure."
  },
  {
    id: 3,
    front: "What is the function of the citric acid cycle?",
    back: "The citric acid cycle (Krebs cycle) is a series of chemical reactions that generates energy through the oxidation of acetyl-CoA derived from carbohydrates, fats, and proteins."
  }
]

export function FlashcardDemo() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [direction, setDirection] = useState(0)

  const nextCard = () => {
    setIsFlipped(false)
    setDirection(1)
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % flashcards.length)
    }, 200)
  }

  const prevCard = () => {
    setIsFlipped(false)
    setDirection(-1)
    setTimeout(() => {
      setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length)
    }, 200)
  }

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="relative h-[400px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard + (isFlipped ? "-flipped" : "")}
          initial={{ 
            opacity: 0,
            x: direction * 50
          }}
          animate={{ 
            opacity: 1,
            x: 0,
            rotateY: isFlipped ? 180 : 0
          }}
          exit={{ 
            opacity: 0,
            x: -direction * 50
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
          style={{ 
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          <Card 
            className="h-full p-8 flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={flipCard}
            style={{ 
              backfaceVisibility: "hidden",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
          >
            <div className="max-w-lg">
              <p className="text-sm text-muted-foreground mb-4">
                Card {currentCard + 1} of {flashcards.length}
              </p>
              <p className="text-xl">
                {isFlipped ? flashcards[currentCard].back : flashcards[currentCard].front}
              </p>
              <p className="text-sm text-muted-foreground mt-8">
                Click to flip card
              </p>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevCard}
          disabled={currentCard === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={flipCard}
          className="rounded-full"
        >
          <RotateCw className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={nextCard}
          disabled={currentCard === flashcards.length - 1}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}