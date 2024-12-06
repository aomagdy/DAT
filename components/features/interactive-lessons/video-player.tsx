"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { Slider } from "@/components/ui/slider"

interface VideoPlayerProps {
  lessonId: number
}

export function VideoPlayer({ lessonId }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Reset player state when lesson changes
    setIsPlaying(false)
    setProgress(0)
  }, [lessonId])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={`https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=2400&h=1350`}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          {!isPlaying && (
            <Button
              size="icon"
              className="absolute w-16 h-16 rounded-full bg-primary/90 hover:bg-primary"
              onClick={togglePlayback}
            >
              <Play className="h-8 w-8" />
            </Button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Lesson {lessonId + 1}: Introduction to Molecular Biology</h3>
          <span className="text-sm text-muted-foreground">12:34</span>
        </div>

        <div>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="my-4"
            onValueChange={(value) => setProgress(value[0])}
          />
          
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon">
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button size="icon" onClick={togglePlayback}>
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            
            <Button variant="outline" size="icon">
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}