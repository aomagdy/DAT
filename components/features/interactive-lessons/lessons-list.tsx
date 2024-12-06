"use client"

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface LessonsListProps {
  selectedLesson: number
  onSelectLesson: (index: number) => void
}

const lessons = [
  {
    title: "Introduction to Molecular Biology",
    duration: "12:34",
    completed: true,
    locked: false
  },
  {
    title: "DNA Structure and Replication",
    duration: "15:45",
    completed: false,
    locked: false
  },
  {
    title: "Transcription and Translation",
    duration: "18:22",
    completed: false,
    locked: false
  },
  {
    title: "Gene Regulation",
    duration: "14:15",
    completed: false,
    locked: true
  },
  {
    title: "Cellular Respiration",
    duration: "20:10",
    completed: false,
    locked: true
  }
]

export function LessonsList({ selectedLesson, onSelectLesson }: LessonsListProps) {
  return (
    <Card className="h-full">
      <div className="p-4 border-b">
        <h3 className="font-heading font-bold">Course Content</h3>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="p-4">
          {lessons.map((lesson, index) => (
            <button
              key={index}
              className={cn(
                "w-full text-left p-3 rounded-lg mb-2 transition-colors",
                selectedLesson === index
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted",
                lesson.locked && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => !lesson.locked && onSelectLesson(index)}
              disabled={lesson.locked}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium">Lesson {index + 1}</span>
                {lesson.locked ? (
                  <Lock className="h-4 w-4" />
                ) : lesson.completed ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : null}
              </div>
              <p className="text-sm text-muted-foreground">{lesson.title}</p>
              <span className="text-xs text-muted-foreground">{lesson.duration}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}