"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import { Instagram, Facebook, Mail } from "lucide-react"

export function ConnectContent() {
  const { locale } = useLocale()
  const t = translations[locale]
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t.connect.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.connect.subtitle}</p>
        </div>

        {/* Social Media Grid - Removed TikTok section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Instagram */}
          <div className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{t.connect.instagram.title}</h3>
            </div>
            <p className="text-muted-foreground mb-6">{t.connect.instagram.description}</p>
            <Button asChild className="w-full">
              <a href="https://instagram.com/maternonest" target="_blank" rel="noopener noreferrer">
                Follow @maternonest
              </a>
            </Button>
          </div>

          {/* Facebook */}
          <div className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-full">
                <Facebook className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{t.connect.facebook.title}</h3>
            </div>
            <p className="text-muted-foreground mb-6">{t.connect.facebook.description}</p>
            <Button asChild className="w-full">
              <a href="https://facebook.com/maternonest" target="_blank" rel="noopener noreferrer">
                Join Our Group
              </a>
            </Button>
          </div>
        </div>

        {/* Instagram Feed Simulation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Latest from Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <Instagram className="h-8 w-8 text-muted-foreground" />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button asChild variant="outline">
              <a href="https://instagram.com/maternonest" target="_blank" rel="noopener noreferrer">
                View More on Instagram
              </a>
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t.connect.newsletter.title}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{t.connect.newsletter.description}</p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t.connect.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isSubscribed}>
                {isSubscribed ? "Subscribed!" : t.connect.newsletter.button}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
