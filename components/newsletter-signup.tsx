"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"

export function NewsletterSignup() {
  const { locale } = useLocale()
  const t = translations[locale]
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-heading font-bold text-foreground">{t.newsletter.title}</h2>
        <p className="text-lg text-muted-foreground">{t.newsletter.description}</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder={t.newsletter.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            {t.newsletter.subscribe}
          </Button>
        </form>
      </div>
    </div>
  )
}
