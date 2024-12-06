import { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Image } from "@/components/ui/image"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  image: string
  isVisible?: boolean
}

export function FeatureCard({ icon: Icon, title, description, image, isVisible }: FeatureCardProps) {
  return (
    <Card className="h-full p-6">
      <Icon 
        className="h-12 w-12 text-[#00BFA5] mb-4"
        aria-hidden="true"
      />
      <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {isVisible && (
        <Image
          src={image}
          alt={`Illustration for ${title}`}
          width={800}
          height={400}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
    </Card>
  )
}