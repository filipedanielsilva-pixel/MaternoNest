"use client"

import { useState, useEffect } from "react"
import type { Locale } from "@/lib/i18n"

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("pt")

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && ["en", "pt"].includes(savedLocale)) {
      setLocale(savedLocale)
    } else {
      setLocale("pt")
      localStorage.setItem("locale", "pt")
    }
  }, [])

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    window.location.reload()
  }

  return { locale, changeLocale }
}
