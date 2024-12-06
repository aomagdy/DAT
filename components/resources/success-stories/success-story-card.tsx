"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock } from "lucide-react"

interface SuccessStoryCardProps {
  name: string
  school: string
  score: string
  image: string
  story: string
  improvement: string
  studyDuration: string
}

export function SuccessStoryCard({
  name,
  school,
  score,
  image,
  story,
  improvement,
  studyDuration
}: SuccessStoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{score}</Badge>
          <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
            {improvement}
          </Badge>
        </div>
        <h3 className="font-heading font-bold text-xl mb-1">{name}</h3>
        <p className="text-primary text-sm mb-4">{school}</p>
        <p className="text-muted-foreground mb-4">{story}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            <span>{improvement}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{studyDuration}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}