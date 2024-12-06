"use client"

import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@datgenius.com",
    link: "mailto:support@datgenius.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    link: null
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "24/7 Support",
    link: null
  }
]

export function ContactInfo() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-heading font-bold mb-6">Contact Information</h2>
      <div className="space-y-6">
        {contactInfo.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{item.title}</div>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-muted-foreground">{item.value}</div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}