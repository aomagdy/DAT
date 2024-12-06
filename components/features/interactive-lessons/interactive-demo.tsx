"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Image } from "@/components/ui/image"

const demoContent = {
  "3d-model": {
    title: "3D Model Interaction",
    description: "Rotate and explore 3D molecular structures",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200&h=800"
  },
  "quiz": {
    title: "Interactive Quizzes",
    description: "Test your knowledge with instant feedback",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200&h=800"
  },
  "discussion": {
    title: "Live Discussion",
    description: "Engage with instructors and fellow students",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200&h=800"
  }
}

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("3d-model")

  return (
    <Card className="p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="3d-model">3D Models</TabsTrigger>
          <TabsTrigger value="quiz">Quizzes</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>

        {Object.entries(demoContent).map(([key, content]) => (
          <TabsContent key={key} value={key}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  {content.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {content.description}
                </p>
                <Button>Try Now</Button>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  )
}