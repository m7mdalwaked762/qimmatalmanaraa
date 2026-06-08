"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", en: "About", ar: "من نحن" },
  { href: "#vision", en: "Vision", ar: "الرؤية" },
  { href: "#services", en: "Services", ar: "خدماتنا" },
  { href: "#process", en: "Process", ar: "المنهجية" },
  { href: "#gallery", en: "Gallery", ar: "المعرض" },
  { href: "#achievements", en: "Achievements", ar: "إنجازاتنا" },
  { href: "#contact", en: "Contact", ar: "تواصل" },
]

export function Navbar() {
  const { lang, toggleLang, isAr } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      aria-label={isAr ? "التنقل الرئيسي" : "Main navigation"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">

        {/* Logo */}
        <a href="#" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt={isAr ? "قمة المنارة" : "Qimmat Al Manara"}
            width={200}
            height={40}
            className="h-12 sm:h-16 lg:h-20 w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold whitespace-nowrap"
            >
              {isAr ? link.ar : link.en}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            aria-label={isAr ? "تغيير اللغة إلى الإنجليزية" : "Switch language to Arabic"}
            className="flex items-center rounded-full border border-primary-foreground/30 px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:border-gold hover:text-gold shrink-0"
          >
            <span className={lang === "en" ? "text-gold" : "text-primary-foreground/60"}>EN</span>
            <span className="mx-1.5 text-primary-foreground/30">|</span>
            <span className={lang === "ar" ? "text-gold" : "text-primary-foreground/60"}>AR</span>
          </button>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <button
            onClick={toggleLang}
            aria-label={isAr ? "تغيير اللغة" : "Toggle language"}
            className="flex items-center rounded-full border border-primary-foreground/30 px-2.5 py-1 text-xs font-semibold text-primary-foreground hover:border-gold hover:text-gold transition-colors"
          >
            <span className={lang === "en" ? "text-gold" : "text-primary-foreground/60"}>EN</span>
            <span className="mx-1 text-primary-foreground/30">|</span>
            <span className={lang === "ar" ? "text-gold" : "text-primary-foreground/60"}>AR</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={isAr ? "قائمة التنقل" : "Toggle menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary-foreground hover:bg-gold hover:text-navy transition-colors duration-200"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-primary-foreground/10 bg-navy px-4 sm:px-6 py-5">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a      
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {isAr ? link.ar : link.en}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}