"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import { Menu, X, Instagram, Facebook } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <Link href="/" className="flex items-center">
            <Image
              src="/maternonest-logo-clean.jpg"
              alt="MaternoNest - Midwifery Care"
              width={140}
              height={80}
              className="h-12 sm:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.nav.home}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.nav.about}
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.nav.services}
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.nav.blog}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.nav.contact}
            </Link>
            <Link href="/connect" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.nav.connect}
            </Link>

            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://instagram.com/maternonest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/maternonest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <LanguageToggle />
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">{t.hero.cta}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 min-h-[44px] min-w-[44px]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors py-3 px-2 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors py-3 px-2 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-colors py-3 px-2 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="/blog"
                className="text-foreground hover:text-primary transition-colors py-3 px-2 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.blog}
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors py-3 px-2 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <Link
                href="/connect"
                className="text-foreground hover:text-primary transition-colors py-3 px-2 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.connect}
              </Link>

              <div className="flex items-center gap-6 py-4 px-2">
                <a
                  href="https://instagram.com/maternonest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/maternonest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 w-full mt-2" size="lg">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  {t.hero.cta}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
