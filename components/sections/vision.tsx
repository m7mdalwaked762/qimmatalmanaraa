"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Eye, Target } from "lucide-react"

const missionBullets = {
  en: [
    "Integrated contracting services",
    "Strict timeline commitment",
    "Best materials & modern methods",
    "Skilled engineering leadership",
  ],
  ar: [
    "خدمات مقاولات متكاملة",
    "التزام كامل بالجداول الزمنية",
    "أفضل المواد والتقنيات الحديثة",
    "قيادة هندسية ذات كفاءة",
  ],
}

export function VisionSection() {
  const { isAr } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="vision" className="bg-secondary py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gold" />
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            {isAr ? "الرؤية والرسالة" : "Vision & Mission"}
          </span>
          <div className="h-px w-12 bg-gold" />
        </div>

        <h2 className="mb-16 text-center font-serif text-3xl font-bold text-primary sm:text-4xl text-balance">
          {isAr ? "ما يوجهنا ويحركنا" : "What Guides and Drives Us"}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md lg:p-10">
            <div className="mb-6 border-t-4 border-gold pt-0" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15">
              <Eye className="h-7 w-7 text-gold" />
            </div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-primary">
              {isAr ? "رؤيتنا" : "Our Vision"}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {isAr
                ? "أن نكون من الشركات الرائدة في قطاع المقاولات عبر حلول هندسية مبتكرة وفق أعلى معايير الجودة والاستدامة."
                : "To be among the leading contracting companies by delivering innovative engineering solutions aligned with the highest standards of quality and sustainability."}
            </p>
          </div>

          {/* Mission Card */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md lg:p-10">
            <div className="mb-6 border-t-4 border-gold pt-0" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15">
              <Target className="h-7 w-7 text-gold" />
            </div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-primary">
              {isAr ? "رسالتنا" : "Our Mission"}
            </h3>
            <ul className="flex flex-col gap-3">
              {(isAr ? missionBullets.ar : missionBullets.en).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
