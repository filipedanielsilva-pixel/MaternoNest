"use client"

import { useState, useEffect } from "react"
import { type Locale, defaultLocale } from "@/lib/i18n"

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && ["en", "pt"].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  return { locale, changeLocale }
}
