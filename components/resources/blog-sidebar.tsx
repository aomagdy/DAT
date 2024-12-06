"use client"

import { Card } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      <Card>
        <NewsletterForm
          variant="sidebar"
          description="Get weekly study tips and DAT prep resources delivered to your inbox."
        />
      </Card>
    </div>
  )
}