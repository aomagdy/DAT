"use client"

import { cn } from "@/lib/utils"

interface MessageBubbleProps {
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export function MessageBubble({ content, sender, timestamp }: MessageBubbleProps) {
  return (
    <div className={cn(
      "flex",
      sender === "user" ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-lg px-4 py-2",
        sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        <p>{content}</p>
        <time className="text-xs opacity-70">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </time>
      </div>
    </div>
  )
}