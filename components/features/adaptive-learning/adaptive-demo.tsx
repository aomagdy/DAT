"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const questions = [
  {
    id: 1,
    difficulty: "medium",
    text: "Which of the following best describes the function of ATP synthase in cellular respiration?",
    options: [
      "Breaks down glucose into pyruvate",
      "Produces ATP using a proton gradient",
      "Transfers electrons to oxygen",
      "Converts NADH to NAD+"
    ],
    correct: 1
  },
  {
    id: 2,
    difficulty: "easy",
    text: "What is the primary function of the citric acid cycle?",
    options: [
      "Glycolysis",
      "Electron transport",
      "ATP production",
      "Energy extraction from acetyl-CoA"
    ],
    correct: 3
  },
  {
    id: 3,
    difficulty: "hard",
    text: "Which statement about oxidative phosphorylation is correct?",
    options: [
      "It occurs in the cytoplasm",
      "It requires oxygen as the final electron acceptor",
      "It produces less ATP than glycolysis",
      "It directly uses substrate-level phosphorylation"
    ],
    correct: 1
  }
]

export function AdaptiveDemo() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [difficulty, setDifficulty] = useState("medium")

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    setShowFeedback(true)
    
    // Adjust difficulty based on answer
    if (selectedAnswer === questions[currentQuestion].correct) {
      setDifficulty(difficulty === "easy" ? "medium" : "hard")
    } else {
      setDifficulty(difficulty === "hard" ? "medium" : "easy")
    }
  }

  const handleNext = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="mb-4">
        <span className="text-sm text-muted-foreground">
          Current Difficulty: {difficulty}
        </span>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-4">
          {questions[currentQuestion].text}
        </h4>
        
        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(value) => setSelectedAnswer(parseInt(value))}
        >
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-end gap-4">
        {!showFeedback ? (
          <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
            Submit Answer
          </Button>
        ) : (
          <>
            <div className="flex-1 flex items-center">
              <p className={selectedAnswer === questions[currentQuestion].correct ? "text-green-600" : "text-red-600"}>
                {selectedAnswer === questions[currentQuestion].correct ? "Correct!" : "Incorrect. Try again!"}
              </p>
            </div>
            <Button onClick={handleNext}>Next Question</Button>
          </>
        )}
      </div>
    </Card>
  )
}