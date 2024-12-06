"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const articles = [
  {
    title: "Top 10 DAT Study Strategies for 2024",
    excerpt: "Discover the most effective study techniques and tips to help you ace the DAT.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800&h=400",
    category: "Study Tips",
    author: "Dr. Sarah Chen",
    date: "Mar 15, 2024",
    readTime: "8 min read"
  },
  {
    title: "Understanding the PAT Section",
    excerpt: "A comprehensive guide to mastering the Perceptual Ability Test section.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=400",
    category: "Exam Guide",
    author: "Dr. Michael Rodriguez",
    date: "Mar 12, 2024",
    readTime: "10 min read"
  },
  {
    title: "Biology Review: Cell Structure",
    excerpt: "Master the fundamentals of cell biology with our detailed review guide.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800&h=400",
    category: "Biology",
    author: "Emily Thompson",
    date: "Mar 10, 2024",
    readTime: "12 min read"
  },
  {
    title: "Time Management During the DAT",
    excerpt: "Learn effective strategies to manage your time during each section of the exam.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800&h=400",
    category: "Test Strategy",
    author: "David Park",
    date: "Mar 8, 2024",
    readTime: "6 min read"
  },
  {
    title: "Chemistry Practice Problems",
    excerpt: "Practice with our curated set of general and organic chemistry problems.",
    image: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?auto=format&fit=crop&q=80&w=800&h=400",
    category: "Chemistry",
    author: "Dr. Sarah Chen",
    date: "Mar 5, 2024",
    readTime: "15 min read"
  },
  {
    title: "Reading Comprehension Tips",
    excerpt: "Improve your speed and accuracy in the Reading Comprehension section.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800&h=400",
    category: "Study Tips",
    author: "Emily Thompson",
    date: "Mar 3, 2024",
    readTime: "7 min read"
  }
]

export function BlogGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <Card key={index} className="overflow-hidden">
          <Link href={`/resources/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="relative aspect-[16/9]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Badge variant="secondary" className="mb-4">
                {article.category}
              </Badge>
              <h3 className="text-xl font-heading font-bold mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{article.author}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  )
}