"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import Link from "next/link"
import { Heart, Baby, Users, CheckCircle, ArrowRight, Shield, Clock, Home } from "lucide-react"

export function PostnatalServiceContent() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            <Baby className="h-4 w-4" />
            {t.services.postnatal.title}
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {locale === "en" ? "Comprehensive Postnatal Care" : "Cuidados Pós-natais Abrangentes"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.services.postnatal.detailed}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                {locale === "en" ? "Postnatal Support Includes" : "O Apoio Pós-natal Inclui"}
              </h2>
              <div className="space-y-4">
                {t.services.postnatal.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {locale === "en" ? "Extended Care" : "Cuidados Prolongados"}
              </h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      {locale === "en" ? "Mental Health Support" : "Apoio à Saúde Mental"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "en"
                        ? "Screening and support for postpartum depression and anxiety"
                        : "Rastreio e apoio para depressão e ansiedade pós-parto"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      {locale === "en" ? "Family Adjustment" : "Adaptação Familiar"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "en"
                        ? "Helping your family adjust to life with your new baby"
                        : "Ajudando a sua família a adaptar-se à vida com o seu novo bebé"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/50">
              <img
                src="/postnatal-care-detailed.png"
                alt="Postnatal care with mother and baby"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Care Timeline */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              {locale === "en" ? "Postnatal Care Timeline" : "Cronograma de Cuidados Pós-natais"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "en"
                ? "Structured support during your recovery and adjustment period"
                : "Apoio estruturado durante o seu período de recuperação e adaptação"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {locale === "en" ? "First 48 Hours" : "Primeiras 48 Horas"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {locale === "en"
                    ? "Immediate postpartum support and initial breastfeeding guidance"
                    : "Apoio pós-parto imediato e orientação inicial sobre amamentação"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {locale === "en" ? "Recovery assessment" : "Avaliação da recuperação"}</li>
                  <li>• {locale === "en" ? "Breastfeeding initiation" : "Início da amamentação"}</li>
                  <li>• {locale === "en" ? "Newborn care basics" : "Cuidados básicos com recém-nascidos"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  {locale === "en" ? "First 2 Weeks" : "Primeiras 2 Semanas"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {locale === "en"
                    ? "Regular home visits to monitor recovery and establish routines"
                    : "Visitas domiciliárias regulares para monitorizar a recuperação e estabelecer rotinas"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {locale === "en" ? "Daily check-ins" : "Verificações diárias"}</li>
                  <li>• {locale === "en" ? "Feeding support" : "Apoio à alimentação"}</li>
                  <li>• {locale === "en" ? "Sleep guidance" : "Orientação sobre sono"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  {locale === "en" ? "Up to 6 Weeks" : "Até 6 Semanas"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {locale === "en"
                    ? "Ongoing support until you feel confident and fully recovered"
                    : "Apoio contínuo até se sentir confiante e totalmente recuperada"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {locale === "en" ? "Weekly consultations" : "Consultas semanais"}</li>
                  <li>• {locale === "en" ? "Problem-solving" : "Resolução de problemas"}</li>
                  <li>• {locale === "en" ? "Transition planning" : "Planeamento da transição"}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-heading font-bold text-foreground">
              {locale === "en" ? "Ensure a Smooth Recovery" : "Garanta uma Recuperação Suave"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en"
                ? "Get the support you need during this important transition period"
                : "Obtenha o apoio de que precisa durante este importante período de transição"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact" className="flex items-center gap-2">
                  {t.servicesPage.bookConsultation}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">{locale === "en" ? "View All Services" : "Ver Todos os Serviços"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
