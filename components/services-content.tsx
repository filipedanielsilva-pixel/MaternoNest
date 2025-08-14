"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import Link from "next/link"
import { Baby, Heart, Users, CheckCircle, Clock, Shield } from "lucide-react"

export function ServicesContent() {
  const { locale } = useLocale()
  const t = translations[locale]

  const services = [
    {
      icon: Heart,
      title: t.services.prenatal.title,
      description: t.services.prenatal.description,
      detailed: t.services.prenatal.detailed,
      features: ["Regular health monitoring", "Nutritional guidance", "Birth plan development", "Cultural sensitivity"],
    },
    {
      icon: Baby,
      title: t.services.birth.title,
      description: t.services.birth.description,
      detailed: t.services.birth.detailed,
      features: [
        "Continuous labor support",
        "Birth advocacy",
        "Pain management techniques",
        "Partner support guidance",
      ],
    },
    {
      icon: Users,
      title: t.services.postnatal.title,
      description: t.services.postnatal.description,
      detailed: t.services.postnatal.detailed,
      features: ["Breastfeeding support", "Newborn care guidance", "Recovery assistance", "Emotional support"],
    },
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive midwifery care designed specifically for English-speaking families in Porto, combining
            international best practices with local expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-foreground">{service.title}</h2>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">{service.detailed}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/30">
                    <img src={`/service-${index + 1}.png`} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 pt-20 border-t">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">Why Choose MaternoNest?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Licensed & Experienced</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Over 10 years of midwifery experience with Portuguese and international certifications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Bilingual Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fluent in English and Portuguese, ensuring clear communication throughout your journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Flexible Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Personalized care plans that adapt to your schedule, preferences, and cultural needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
