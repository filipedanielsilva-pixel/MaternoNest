import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "MaternoNest - Compassionate Midwifery Care in Porto",
  description:
    "Professional midwifery services for English-speaking expats in Porto. Prenatal care, birth support, and postnatal care with bilingual support. Love, care, and support for your pregnancy journey.",
  keywords: [
    "midwife Porto",
    "pregnancy care Porto",
    "English speaking midwife Portugal",
    "prenatal care",
    "birth support",
    "postnatal care",
    "expat pregnancy Portugal",
    "bilingual midwife",
    "home birth Porto",
    "hospital birth support",
  ],
  authors: [{ name: "MaternoNest" }],
  creator: "MaternoNest",
  publisher: "MaternoNest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://maternonest.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/en",
      "pt-PT": "/pt",
    },
  },
  openGraph: {
    title: "MaternoNest - Compassionate Midwifery Care in Porto",
    description:
      "Professional midwifery services for English-speaking expats in Porto. Prenatal care, birth support, and postnatal care with bilingual support.",
    url: "https://maternonest.com",
    siteName: "MaternoNest",
    images: [
      {
        url: "/maternonest-logo.jpg",
        width: 1200,
        height: 630,
        alt: "MaternoNest - Love, care, and support",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaternoNest - Compassionate Midwifery Care in Porto",
    description:
      "Professional midwifery services for English-speaking expats in Porto. Prenatal care, birth support, and postnatal care.",
    images: ["/maternonest-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "MaternoNest",
              description: "Professional midwifery services for English-speaking expats in Porto",
              url: "https://maternonest.com",
              logo: "https://maternonest.com/maternonest-logo.jpg",
              image: "https://maternonest.com/maternonest-logo.jpg",
              telephone: "+351 XXX XXX XXX",
              email: "hello@maternonest.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Porto",
                addressCountry: "PT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "41.1579",
                longitude: "-8.6291",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "€€",
              medicalSpecialty: "Midwifery",
              serviceArea: {
                "@type": "City",
                name: "Porto",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Midwifery Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Prenatal Care",
                      description: "Comprehensive prenatal care and guidance",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Birth Support",
                      description: "Professional birth support and advocacy",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Postnatal Care",
                      description: "Postpartum care and breastfeeding support",
                    },
                  },
                ],
              },
              sameAs: ["https://instagram.com/maternonest", "https://facebook.com/maternonest"],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
