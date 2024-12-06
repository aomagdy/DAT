"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/datgenius",
    color: "hover:text-blue-600"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/datgenius",
    color: "hover:text-blue-400"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/datgenius",
    color: "hover:text-blue-700"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/datgenius",
    color: "hover:text-pink-600"
  }
]

export function SocialLinks() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-heading font-bold mb-6">Connect With Us</h2>
      <div className="flex gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              className={social.color}
              asChild
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
              >
                <Icon className="h-4 w-4" />
              </a>
            </Button>
          )
        })}
      </div>
    </Card>
  )
}