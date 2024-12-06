"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, GraduationCap, FileText, Video, HelpCircle } from "lucide-react"

const resources = [
  {
    name: "Study Guide",
    href: "/resources/study-guide",
    icon: BookOpen,
    description: "Comprehensive DAT preparation guides"
  },
  {
    name: "Practice Tests",
    href: "/resources/practice-tests",
    icon: FileText,
    description: "Full-length practice exams"
  },
  {
    name: "Success Stories",
    href: "/resources/success-stories",
    icon: GraduationCap,
    description: "Real student experiences"
  },
  {
    name: "Video Tutorials",
    href: "/resources/video-tutorials",
    icon: Video,
    description: "Step-by-step video lessons"
  },
  {
    name: "FAQ",
    href: "/resources/faq",
    icon: HelpCircle,
    description: "Frequently asked questions"
  }
]

export function ResourcesNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Resources navigation">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {resources.map((resource) => {
          const Icon = resource.icon
          const isActive = pathname === resource.href
          
          return (
            <Link
              key={resource.href}
              href={resource.href}
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
                    {resource.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
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