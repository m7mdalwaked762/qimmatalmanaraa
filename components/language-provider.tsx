"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Lang = "en" | "ar"

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  isAr: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  isAr: false,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"))
  }, [])

  const isAr = lang === "ar"

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, isAr }}>
      <div dir={isAr ? "rtl" : "ltr"} lang={lang} className="min-h-screen">
        {children}
      </div>
    </LanguageContext.Provider>
  )
}
