"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = {
  en: ["Study", "Planning", "Execution", "Supervision", "Delivery"],
  ar: ["دراسة", "تخطيط", "تنفيذ", "متابعة", "تسليم"],
}

export function ProcessSection() {
  const { isAr } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const currentSteps = isAr ? steps.ar : steps.en

  return (
    <section id="process" className="bg-secondary py-24 lg:py-32">
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
            {isAr ? "منهجية العمل" : "Our Process"}
          </span>
          <div className="h-px w-12 bg-gold" />
        </div>

        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-primary sm:text-4xl text-balance">
          {isAr ? "كيف ننجز مشاريعنا" : "How We Deliver Projects"}
        </h2>

        <p className="mx-auto mb-20 max-w-xl text-center text-muted-foreground">
          {isAr
            ? "نتبع منهجية منظمة تضمن الالتزام بالجداول الزمنية والمعايير العالية في كل مرحلة"
            : "A structured methodology ensuring schedule discipline and high standards at every stage"}
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 right-0 left-0 hidden h-0.5 bg-border lg:block" />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {currentSteps.map((step, i) => (
              <div key={step} className="relative flex flex-col items-center text-center">
                {/* Number Circle */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy shadow-md">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Step Label */}
                <h3 className="font-serif text-lg font-bold text-primary">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
