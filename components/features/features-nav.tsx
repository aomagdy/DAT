"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Brain, Video, Library, MessageSquare } from "lucide-react"

const features = [
  {
    name: "Adaptive Learning",
    href: "/features/adaptive-learning",
    icon: Brain,
    description: "AI-powered personalized study plans"
  },
  {
    name: "Interactive Lessons",
    href: "/features/interactive-lessons",
    icon: Video,
    description: "Engaging video content and 3D models"
  },
  {
    name: "Smart Flashcards",
    href: "/features/smart-flashcards",
    icon: Library,
    description: "Spaced repetition memory tools"
  },
  {
    name: "AI Tutor",
    href: "/features/ai-tutor",
    icon: MessageSquare,
    description: "24/7 personalized assistance"
  }
]

export function FeaturesNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Features navigation">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon
          const isActive = pathname === feature.href
          
          return (
            <Link
              key={feature.href}
              href={feature.href}
              className={cn(
                "relative group rounded-lg border p-4 hover:border-primary transition-colors",
                isActive && "border-primary bg-primary/5"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <div className="flex items-center gap-3">
                <Icon className={cn(
                  "h-6 w-6",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} 
                aria-hidden="true"
                />
                <div>
                  <h3 className={cn(
                    "font-medium",
                    isActive ? "text-primary" : "text-foreground"
                  )}>
                    {feature.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}