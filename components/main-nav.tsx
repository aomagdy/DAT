"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Brain, Video, Library, MessageSquare, BookOpen, GraduationCap, FileText } from "lucide-react"

const features = [
  {
    name: "Adaptive Learning",
    href: "/features/adaptive-learning",
    icon: Brain,
    description: "AI-powered personalized study plans that evolve with your progress"
  },
  {
    name: "Interactive Lessons",
    href: "/features/interactive-lessons",
    icon: Video,
    description: "Engaging video content and interactive 3D models"
  },
  {
    name: "Smart Flashcards",
    href: "/features/smart-flashcards",
    icon: Library,
    description: "Advanced spaced repetition system for optimal retention"
  },
  {
    name: "AI Tutor",
    href: "/features/ai-tutor",
    icon: MessageSquare,
    description: "24/7 personalized assistance from our AI tutoring system"
  }
]

const resources = [
  {
    name: "Study Guide",
    href: "/resources/study-guide",
    icon: BookOpen,
    description: "Comprehensive DAT preparation guides and tips"
  },
  {
    name: "Practice Tests",
    href: "/resources/practice-tests",
    icon: FileText,
    description: "Full-length practice exams with detailed explanations"
  },
  {
    name: "Success Stories",
    href: "/resources/success-stories",
    icon: GraduationCap,
    description: "Real stories from students who achieved their goals"
  }
]

export function MainNav() {
  const router = useRouter()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <li key={feature.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={feature.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          router.pathname === feature.href && "bg-accent"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <div className="text-sm font-medium leading-none">{feature.name}</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {feature.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                )
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/pricing" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">All Resources</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Browse all our learning resources and articles
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <li key={resource.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={resource.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <div className="text-sm font-medium leading-none">{resource.name}</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {resource.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                )
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}