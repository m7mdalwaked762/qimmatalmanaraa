"use client"

import { useLanguage } from "@/components/language-provider"
import { useState, useEffect, useCallback } from "react"
import {
  Building2,
  Hammer,
  Droplets,
  ClipboardCheck,
  TrendingDown,
} from "lucide-react"

const heroImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
  "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=1920&q=80",
]

const serviceHighlights = [
  {
    icon: Building2,
    en: "General Contracting",
    ar: "المقاولات العامة",
  },
  {
    icon: Hammer,
    en: "Structural & Finishing",
    ar: "العظم والتشطيبات",
  },
  {
    icon: Droplets,
    en: "Pools & Water Features",
    ar: "المسابح والشلالات",
  },
  {
    icon: ClipboardCheck,
    en: "Engineering Supervision",
    ar: "الإشراف الهندسي",
  },
  {
    icon: TrendingDown,
    en: "Cost-Competitive Solutions",
    ar: "حلول تنافسية",
  },
]

export function HeroSection() {
  const { isAr } = useLanguage()
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [nextImage])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-navy" />

      {/* Crossfading background images */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{
            opacity: i === currentImage ? 0.3 : 0,
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center">
        {/* Tagline chip */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 animate-fade-in-up">
          <div className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {isAr ? "منذ 2005 — أكثر من 20 عاماً من التميّز" : "Since 2005 — 20+ Years of Excellence"}
          </span>
        </div>

        <h1 className="font-serif font-bold text-4xl leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance animate-fade-in-up animation-delay-200">
          {isAr
            ? "نبني التميز. ونصنع الثقة."
            : "Building Excellence. Delivering Trust."}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg animate-fade-in-up animation-delay-400 text-pretty">
          {isAr
            ? "من الأساسات إلى التسليم — نقدم مقاولات عامة وإنشاءات سكنية وتجارية وإدارية بدقة وجودة والتزام صارم."
            : "From foundations to handover — we deliver general contracting, residential, commercial, and administrative construction with precision and unwavering commitment."}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center rounded-2xl bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold/90 hover:shadow-lg"
          >
            {isAr ? "خدماتنا" : "Our Services"}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center rounded-2xl border-2 border-gold px-8 py-3.5 text-sm font-semibold text-gold transition-all hover:bg-gold/10"
          >
            {isAr ? "تواصل معنا" : "Contact"}
          </a>
        </div>

        {/* Service highlights strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          {serviceHighlights.map((svc) => (
            <div
              key={svc.en}
              className="flex items-center gap-2.5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-gold/10"
            >
              <svc.icon className="h-4 w-4 text-gold" />
              <span className="text-xs font-medium text-primary-foreground/80">
                {isAr ? svc.ar : svc.en}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-foreground/30 pt-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gold" />
        </div>
      </div>
    </section>
  )
}
