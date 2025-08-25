"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import Link from "next/link"
import { Award, Globe, Heart, Users, Star, Video } from "lucide-react"

export function AboutContent() {
  const { locale } = useLocale()
  const t = translations[locale]

  const stats = [
    { number: "10+", label: t.about.stats.experience },
    { number: "500+", label: t.about.stats.families },
    { number: "2", label: t.about.stats.languages },
    { number: "100%", label: t.about.stats.satisfaction },
  ]

  const values = [
    {
      icon: Heart,
      title: t.about.values.compassionate.title,
      description: t.about.values.compassionate.description,
    },
    {
      icon: Globe,
      title: t.about.values.cultural.title,
      description: t.about.values.cultural.description,
    },
    {
      icon: Users,
      title: t.about.values.family.title,
      description: t.about.values.family.description,
    },
    {
      icon: Award,
      title: t.about.values.evidence.title,
      description: t.about.values.evidence.description,
    },
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              {t.about.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t.about.subtitle}</p>
            <p className="text-lg text-foreground leading-relaxed">{t.about.story}</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">{t.about.cta}</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/30">
              <img
                src="/professional-midwife-having-online-consultation-wi.png"
                alt="Professional midwife consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                <span className="font-semibold">{locale === "pt" ? "Consultas Online" : "Online Consultations"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              {locale === "pt" ? "A Nossa Missão" : "Our Mission"}
            </h2>
            <p className="text-lg text-foreground leading-relaxed">{t.about.mission}</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">{t.about.values.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.about.values.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Qualifications */}
        <div className="bg-card border rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-heading font-bold text-foreground">{t.about.qualificationsSection.title}</h2>
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-8">{t.about.qualifications}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                  {t.about.qualificationsSection.certifications}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    {t.about.qualificationsSection.licensedMidwife}
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    {t.about.qualificationsSection.childbirth}
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    {t.about.qualificationsSection.lactation}
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                  {t.about.qualificationsSection.specializations}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    {t.about.qualificationsSection.highRisk}
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    {t.about.qualificationsSection.natural}
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    {t.about.qualificationsSection.mental}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-heading font-bold text-foreground">
              {locale === "pt" ? "Mantenha-se Conectada" : "Stay Connected"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "pt"
                ? "Receba dicas semanais de gravidez e actualizações da nossa prática na sua caixa de correio electrónico."
                : "Get weekly pregnancy tips and updates from our practice delivered to your inbox."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={
                  locale === "pt" ? "Insira o seu endereço de correio electrónico" : "Enter your email address"
                }
                className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90">{locale === "pt" ? "Subscrever" : "Subscribe"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
