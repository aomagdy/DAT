"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t z-50">
      <div className="container">
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={declineCookies}>
                Decline
              </Button>
              <Button onClick={acceptCookies}>Accept</Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="flex-shrink-0"
              onClick={declineCookies}
              aria-label="Close cookie consent"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}