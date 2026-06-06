"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CheckCircle2 } from "lucide-react"

const highlights = {
  en: [
    "Proven market experience",
    "Professional engineering team",
    "Strict safety standards",
    "Trusted supplier network",
  ],
  ar: [
    "خبرة مثبتة في السوق",
    "فريق هندسي محترف",
    "معايير سلامة صارمة",
    "شبكة موردين موثوقة",
  ],
}

export function AboutSection() {
  const { isAr } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Label */}
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-12 bg-gold" />
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            {isAr ? "من نحن" : "About Us"}
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-primary sm:text-4xl lg:text-5xl text-balance">
              {isAr
                ? "بناء على أساس من الثقة والخبرة"
                : "Built on a Foundation of Trust and Expertise"}
            </h2>
            <div className="mt-8 h-1 w-16 rounded-full bg-gold" />
          </div>

          {/* Right Column */}
          <div>
            <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
              {isAr
                ? "على مدار أكثر من عشرين عاماً، تعمل قمة المنارة بخبرة واسعة ورؤية هندسية متقدمة. نؤمن أن البناء ليس مجرد خرسانة وحديد، بل هو ثقة تُبنى وسمعة تُحافظ عليها وشراكات طويلة الأمد."
                : "For more than two decades, Qimmat Al Manara has operated in construction with deep expertise and advanced engineering vision. We believe construction is not just concrete and steel\u2014it is trust built, reputation protected, and long-term partnerships."}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {(isAr ? highlights.ar : highlights.en).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-secondary-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
