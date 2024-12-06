"use client"

import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Brain } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Breadcrumb } from "@/components/breadcrumb"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const showBreadcrumb = router.pathname !== "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" : "bg-background"
    )}>
      <div className="container flex h-16 items-center">
        <MobileNav />
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <Brain className="h-6 w-6" />
          <span className="font-bold">DATGenius</span>
        </Link>
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <Link href="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link href="/signup" className="hidden sm:block">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </div>
      {showBreadcrumb && (
        <div className="container">
          <Breadcrumb />
        </div>
      )}
    </header>
  )
}