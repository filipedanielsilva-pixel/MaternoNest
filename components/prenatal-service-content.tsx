"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import Link from "next/link"
import { Heart, Shield, Users, CheckCircle, ArrowRight, Calendar, Clock, Phone } from "lucide-react"

export function PrenatalServiceContent() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            <Heart className="h-4 w-4" />
            {t.services.prenatal.title}
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {locale === "en" ? "Comprehensive Prenatal Care" : "Cuidados Pré-natais Abrangentes"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.services.prenatal.detailed}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                {locale === "en" ? "What's Included" : "O Que Está Incluído"}
              </h2>
              <div className="space-y-4">
                {t.services.prenatal.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {locale === "en" ? "Additional Benefits" : "Benefícios Adicionais"}
              </h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      {locale === "en" ? "Risk Assessment" : "Avaliação de Risco"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "en"
                        ? "Early identification and management of potential complications"
                        : "Identificação precoce e gestão de potenciais complicações"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      {locale === "en" ? "Partner Support" : "Apoio ao Parceiro"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "en"
                        ? "Guidance and education for partners throughout the journey"
                        : "Orientação e educação para parceiros durante toda a jornada"}
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
                src="/prenatal-care-consultation.png"
                alt="Prenatal care consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Appointment Types */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              {locale === "en" ? "Appointment Options" : "Opções de Consulta"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "en"
                ? "Flexible scheduling to fit your needs and preferences"
                : "Horários flexíveis para se adequar às suas necessidades e preferências"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  {locale === "en" ? "In-Person Visits" : "Consultas Presenciais"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {locale === "en"
                    ? "Traditional face-to-face consultations at your preferred location"
                    : "Consultas tradicionais presenciais no local da sua preferência"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {locale === "en" ? "Physical examinations" : "Exames físicos"}</li>
                  <li>• {locale === "en" ? "Hands-on guidance" : "Orientação prática"}</li>
                  <li>• {locale === "en" ? "Personal connection" : "Conexão pessoal"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  {locale === "en" ? "Virtual Consultations" : "Consultas Virtuais"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {locale === "en"
                    ? "Online appointments from the comfort of your home"
                    : "Consultas online no conforto da sua casa"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {locale === "en" ? "Convenient scheduling" : "Horários convenientes"}</li>
                  <li>• {locale === "en" ? "No travel required" : "Sem necessidade de deslocação"}</li>
                  <li>• {locale === "en" ? "Same quality care" : "Mesma qualidade de cuidados"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {locale === "en" ? "Emergency Support" : "Apoio de Emergência"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {locale === "en"
                    ? "24/7 support for urgent pregnancy-related concerns"
                    : "Apoio 24/7 para preocupações urgentes relacionadas com a gravidez"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {locale === "en" ? "Quick response" : "Resposta rápida"}</li>
                  <li>• {locale === "en" ? "Professional guidance" : "Orientação profissional"}</li>
                  <li>• {locale === "en" ? "Peace of mind" : "Tranquilidade"}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-heading font-bold text-foreground">
              {locale === "en" ? "Ready to Begin Your Journey?" : "Pronta para Começar a Sua Jornada?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en"
                ? "Schedule your initial consultation and take the first step towards personalized prenatal care"
                : "Marque a sua consulta inicial e dê o primeiro passo para cuidados pré-natais personalizados"}
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
