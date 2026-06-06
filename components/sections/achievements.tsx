"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, FolderOpen, Handshake, Clock } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    en: { value: "20+", label: "Years Experience" },
    ar: { value: "+20", label: "سنة خبرة" },
  },
  {
    icon: FolderOpen,
    en: { value: "150+", label: "Projects Delivered (Edit)" },
    ar: { value: "+150", label: "مشاريع منفذة (قابلة للتحديث)" },
  },
  {
    icon: Handshake,
    en: { value: "50+", label: "Public & Private Partnerships" },
    ar: { value: "+50", label: "شراكات حكومية وخاصة" },
  },
  {
    icon: Clock,
    en: { value: "99%", label: "On-Time Delivery Culture" },
    ar: { value: "%99", label: "ثقافة الالتزام بالمواعيد" },
  },
]

export function AchievementsSection() {
  const { isAr } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="achievements" className="bg-navy py-24 lg:py-32">
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
            {isAr ? "إنجازاتنا" : "Achievements"}
          </span>
          <div className="h-px w-12 bg-gold" />
        </div>

        <h2 className="mb-16 text-center font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
          {isAr ? "أرقام تتحدث عن نفسها" : "Numbers That Speak for Themselves"}
        </h2>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => {
            const data = isAr ? stat.ar : stat.en
            return (
              <div key={data.label} className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15">
                  <stat.icon className="h-7 w-7 text-gold" />
                </div>
                <span className="mb-2 font-serif text-4xl font-bold text-gold lg:text-5xl">
                  {data.value}
                </span>
                <span className="text-sm font-medium text-primary-foreground/70">
                  {data.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
