"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface ResourceCardProps {
  title: string
  description: string
  type: string
  category: string
  icon: LucideIcon
  downloadUrl: string
  image: string
}

export function ResourceCard({
  title,
  description,
  type,
  category,
  icon: Icon,
  downloadUrl,
  image
}: ResourceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge 
          variant="secondary"
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
        >
          {type}
        </Badge>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <Badge variant="outline">{category}</Badge>
        </div>
        <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <Button className="w-full gap-2">
          <Download className="h-4 w-4" />
          Download Now
        </Button>
      </div>
    </Card>
  )
}