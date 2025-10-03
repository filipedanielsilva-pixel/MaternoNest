"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import Link from "next/link"
import { Heart, Home, Building2, CheckCircle, ArrowRight, Shield, Clock } from "lucide-react"

export function BirthServiceContent() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            <Heart className="h-4 w-4" />
            {t.services.birth.title}
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {locale === "en" ? "Empowering Birth Support" : "Apoio ao Parto Capacitante"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.services.birth.detailed}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative order-first lg:order-first">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/50">
              <img
                src="/midwife-providing-emotional-support-and-guidance-t.jpg"
                alt="Birth support with midwife"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                {locale === "en" ? "Our Birth Support Includes" : "O Nosso Apoio ao Parto Inclui"}
              </h2>
              <div className="space-y-4">
                {t.services.birth.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {locale === "en" ? "Specialized Support" : "Apoio Especializado"}
              </h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      {locale === "en" ? "Birth Advocacy" : "Advocacia do Parto"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "en"
                        ? "Ensuring your birth preferences are respected and communicated"
                        : "Garantindo que as suas preferências de parto são respeitadas e comunicadas"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      {locale === "en" ? "Continuous Presence" : "Presença Contínua"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "en"
                        ? "Uninterrupted support throughout your entire labor and delivery"
                        : "Apoio ininterrupto durante todo o seu trabalho de parto e nascimento"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Birth Settings */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              {locale === "en" ? "Birth Settings We Support" : "Locais de Parto Que Apoiamos"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "en"
                ? "Professional support wherever you choose to give birth"
                : "Apoio profissional onde quer que escolha dar à luz"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  {locale === "en" ? "Home Birth" : "Parto em Casa"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {locale === "en"
                    ? "Intimate, personalized birth experience in your own environment"
                    : "Experiência de parto íntima e personalizada no seu próprio ambiente"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {locale === "en" ? "Familiar surroundings" : "Ambiente familiar"}</li>
                  <li>• {locale === "en" ? "Complete privacy" : "Privacidade completa"}</li>
                  <li>• {locale === "en" ? "Family involvement" : "Envolvimento familiar"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  {locale === "en" ? "Hospital Birth" : "Parto Hospitalar"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {locale === "en"
                    ? "Professional midwifery support within hospital settings"
                    : "Apoio profissional de obstetrícia em ambiente hospitalar"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {locale === "en" ? "Continuous advocacy" : "Advocacia contínua"}</li>
                  <li>• {locale === "en" ? "Pain relief guidance" : "Orientação sobre alívio da dor"}</li>
                  <li>• {locale === "en" ? "Professional support" : "Apoio profissional"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  {locale === "en" ? "Birth Center" : "Casa de Parto"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {locale === "en"
                    ? "Home-like environment with professional midwifery care"
                    : "Ambiente semelhante a casa com cuidados profissionais de obstetrícia"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {locale === "en" ? "Comfortable setting" : "Ambiente confortável"}</li>
                  <li>• {locale === "en" ? "Natural birth focus" : "Foco no parto natural"}</li>
                  <li>• {locale === "en" ? "Personalized care" : "Cuidados personalizados"}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-heading font-bold text-foreground">
              {locale === "en" ? "Plan Your Ideal Birth Experience" : "Planeie a Sua Experiência de Parto Ideal"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en"
                ? "Let's discuss your birth preferences and create a personalized support plan"
                : "Vamos discutir as suas preferências de parto e criar um plano de apoio personalizado"}
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
