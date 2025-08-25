"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import Link from "next/link"
import { Baby, Heart, Users, ArrowRight } from "lucide-react"

export function ServicesPreview() {
  const { locale } = useLocale()
  const t = translations[locale]

  const services = [
    {
      icon: Heart,
      title: t.services.prenatal.title,
      description: t.services.prenatal.description,
      href: "/services",
    },
    {
      icon: Baby,
      title: t.services.birth.title,
      description: t.services.birth.description,
      href: "/services",
    },
    {
      icon: Users,
      title: t.services.postnatal.title,
      description: t.services.postnatal.description,
      href: "/services",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">{t.servicesSection.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.servicesSection.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  <Button asChild variant="ghost" className="group/btn">
                    <Link href={service.href} className="flex items-center gap-2">
                      {t.servicesSection.learnMore}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">{t.servicesSection.viewAllServices}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
