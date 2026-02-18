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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      aria-label={isAr ? "التنقل الرئيسي" : "Main navigation"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt={isAr ? "قمة المنارة" : "Qimmat Al Manara"}
            width={100}
            height={140}
            className="h-20 w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold"
            >
              {isAr ? link.ar : link.en}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            aria-label={isAr ? "تغيير اللغة إلى الإنجليزية" : "Switch language to Arabic"}
            className="flex items-center rounded-full border border-primary-foreground/30 px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <span className={lang === "en" ? "text-gold" : "text-primary-foreground/60"}>EN</span>
            <span className="mx-1.5 text-primary-foreground/30">|</span>
            <span className={lang === "ar" ? "text-gold" : "text-primary-foreground/60"}>AR</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLang}
            aria-label={isAr ? "تغيير اللغة" : "Toggle language"}
            className="flex items-center rounded-full border border-primary-foreground/30 px-2.5 py-1 text-xs font-semibold text-primary-foreground"
          >
            <span className={lang === "en" ? "text-gold" : "text-primary-foreground/60"}>EN</span>
            <span className="mx-1 text-primary-foreground/30">|</span>
            <span className={lang === "ar" ? "text-gold" : "text-primary-foreground/60"}>AR</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={isAr ? "قائمة التنقل" : "Toggle menu"}
            className="text-primary-foreground"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-navy px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold"
              >
                {isAr ? link.ar : link.en}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
