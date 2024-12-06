"use client"

import Link from "next/link"
import { useRouter } from "next/router"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export function Breadcrumb() {
  const router = useRouter()
  const segments = router.asPath.split('/').filter(Boolean)

  if (segments.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol 
        className="flex items-center space-x-2 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li 
          className="flex items-center"
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/ListItem"
        >
          <Link 
            href="/"
            className="flex items-center text-muted-foreground hover:text-foreground"
            itemProp="item"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only" itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`
          const isLast = index === segments.length - 1
          const position = index + 2

          return (
            <li 
              key={segment}
              className="flex items-center"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link
                href={href}
                className={cn(
                  "ml-2 capitalize hover:text-foreground",
                  isLast ? "text-foreground font-medium" : "text-muted-foreground"
                )}
                aria-current={isLast ? "page" : undefined}
                itemProp="item"
              >
                <span itemProp="name">
                  {segment.replace(/-/g, ' ')}
                </span>
              </Link>
              <meta itemProp="position" content={position.toString()} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}