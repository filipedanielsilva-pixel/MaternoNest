"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import { CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSignup() {
  const { locale } = useLocale()
  const t = translations[locale]
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
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

      setIsSuccess(true)
      setEmail("")

      toast({
        title: locale === "en" ? "Subscribed!" : "Subscrito!",
        description:
          locale === "en"
            ? "Thank you for subscribing to our newsletter!"
            : "Obrigada por subscrever a nossa newsletter!",
      })

      setTimeout(() => setIsSuccess(false), 5000)
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
    <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-heading font-bold text-foreground">{t.newsletter.title}</h2>
        <p className="text-lg text-muted-foreground">{t.newsletter.description}</p>

        {isSuccess && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center justify-center gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
            <p className="font-medium text-green-900 dark:text-green-100">
              {locale === "en" ? "Successfully subscribed!" : "Subscrito com sucesso!"}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder={t.newsletter.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
            disabled={isSubmitting}
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting || isSuccess}>
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {locale === "en" ? "Subscribing..." : "A subscrever..."}
              </>
            ) : isSuccess ? (
              locale === "en" ? (
                "Subscribed!"
              ) : (
                "Subscrito!"
              )
            ) : (
              t.newsletter.subscribe
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
