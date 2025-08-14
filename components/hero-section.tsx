"use client"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import Link from "next/link"
import { ArrowRight, Shield, Heart, Users } from "lucide-react"

export function HeroSection() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{t.trustIndicators.licensedMidwife}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{t.trustIndicators.bilingualSupport}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{t.trustIndicators.expatFocused}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 min-h-[48px]">
                <Link href="/contact" className="flex items-center gap-2">
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] bg-transparent">
                <Link href="/services">{t.servicesSection.learnMore}</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-secondary/50 mx-auto max-w-md lg:max-w-none">
              <img
                src="/peaceful-pregnant-woman.png"
                alt="Peaceful expectant mother in natural setting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements - hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
