"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredArticle = {
  title: "Complete Guide to DAT Preparation: 2024 Edition",
  excerpt: "Everything you need to know about preparing for the Dental Admission Test, including study strategies, time management tips, and recommended resources. Our comprehensive guide will help you create an effective study plan and maximize your chances of success.",
  image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=2400&h=1350",
  category: "Study Guide",
  author: "Dr. Sarah Chen",
  date: "Mar 18, 2024",
  readTime: "20 min read"
}

export function FeaturedArticle() {
  return (
    <Card className="overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="relative aspect-[16/9] lg:aspect-auto">
          <img
            src={featuredArticle.image}
            alt={featuredArticle.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 flex flex-col">
          <Badge variant="secondary" className="w-fit mb-4">
            Featured
          </Badge>
          <h2 className="text-3xl font-heading font-bold mb-4">
            {featuredArticle.title}
          </h2>
          <p className="text-muted-foreground mb-6">
            {featuredArticle.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <span>{featuredArticle.author}</span>
            <span>{featuredArticle.readTime}</span>
          </div>
          <div className="mt-auto">
            <Link href={`/resources/${featuredArticle.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <Button>
                Read Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}