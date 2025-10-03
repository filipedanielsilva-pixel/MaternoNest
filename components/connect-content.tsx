"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import { Instagram, Facebook, Mail, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ConnectContent() {
  const { locale } = useLocale()
  const t = translations[locale]
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to subscribe")
      }

      setIsSubscribed(true)
      setEmail("")

      toast({
        title: locale === "en" ? "Subscribed!" : "Subscrito!",
        description:
          locale === "en"
            ? "Thank you for subscribing to our newsletter!"
            : "Obrigada por subscrever a nossa newsletter!",
      })

      setTimeout(() => setIsSubscribed(false), 5000)
    } catch (error) {
      toast({
        title: "Error",
        description:
          locale === "en" ? "Failed to subscribe. Please try again." : "Falha ao subscrever. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t.connect.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.connect.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              <a href="https://www.instagram.com/stories/thematernonest/" target="_blank" rel="noopener noreferrer">
                Follow @thematernonest
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
              <a
                href="https://www.facebook.com/profile.php?id=61575833467440"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Group
              </a>
            </Button>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-black rounded-full">
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">TikTok</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              {locale === "en"
                ? "Short videos, quick tips, and pregnancy insights."
                : "Vídeos curtos, dicas rápidas e insights sobre gravidez."}
            </p>
            <Button asChild className="w-full">
              <a href="https://www.tiktok.com/@thematernonest" target="_blank" rel="noopener noreferrer">
                Follow @thematernonest
              </a>
            </Button>
          </div>
        </div>

        {/* Instagram Feed Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Latest from Instagram</h2>
          <p className="text-center text-muted-foreground mb-8">
            {locale === "en"
              ? "Follow us on Instagram to see our latest posts, tips, and community updates!"
              : "Siga-nos no Instagram para ver as nossas últimas publicações, dicas e atualizações da comunidade!"}
          </p>
          <div className="text-center">
            <Button asChild size="lg">
              <a href="https://www.instagram.com/thematernonest/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 mr-2" />
                View Our Instagram Feed
              </a>
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t.connect.newsletter.title}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{t.connect.newsletter.description}</p>

          {isSubscribed && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center justify-center gap-3 max-w-md mx-auto">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <p className="font-medium text-green-900 dark:text-green-100">
                {locale === "en" ? "Successfully subscribed!" : "Subscrito com sucesso!"}
              </p>
            </div>
          )}

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t.connect.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={isSubmitting}
              />
              <Button type="submit" disabled={isSubmitting || isSubscribed}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {locale === "en" ? "Subscribing..." : "A subscrever..."}
                  </>
                ) : isSubscribed ? (
                  locale === "en" ? (
                    "Subscribed!"
                  ) : (
                    "Subscrito!"
                  )
                ) : (
                  t.connect.newsletter.button
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
