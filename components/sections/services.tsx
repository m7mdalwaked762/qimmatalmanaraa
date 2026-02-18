"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Building2,
  Hammer,
  Droplets,
  ClipboardCheck,
  TrendingDown,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    en: {
      title: "General Contracting",
      desc: "End-to-end delivery for villas, housing projects, commercial and administrative complexes.",
    },
    ar: {
      title: "المقاولات العامة",
      desc: "تنفيذ متكامل للفلل والإسكانات والمجمعات التجارية والإدارية.",
    },
  },
  {
    icon: Hammer,
    en: {
      title: "Structural & Finishing",
      desc: "Foundations, concrete structure, masonry, and premium interior/exterior finishing.",
    },
    ar: {
      title: "العظم والتشطيبات",
      desc: "أساسات وهيكل خرساني ومباني وتشطيبات داخلية وخارجية بجودة عالية.",
    },
  },
  {
    icon: Droplets,
    en: {
      title: "Pools & Water Features",
      desc: "Modern designs, advanced waterproofing, efficient filtration, and luxury finishes.",
    },
    ar: {
      title: "المسابح والشلالات",
      desc: "تصاميم عصرية مع عزل متطور وفلترة عالية وتشطيبات فاخرة.",
    },
  },
  {
    icon: ClipboardCheck,
    en: {
      title: "Engineering Supervision",
      desc: "Planning, drawings review, site supervision, and quality control until handover.",
    },
    ar: {
      title: "الإشراف الهندسي",
      desc: "تخطيط ومراجعة مخططات ومتابعة تنفيذ وضبط جودة حتى التسليم.",
    },
  },
  {
    icon: TrendingDown,
    en: {
      title: "Cost-Competitive Solutions",
      desc: "Smart cost control through resource planning, supplier strength, and reduced waste.",
    },
    ar: {
      title: "حلول تنافسية",
      desc: "تحكم ذكي بالتكلفة عبر إدارة الموارد وشبكة الموردين وتقليل الهدر.",
    },
  },
]

function ServiceCard({
  icon: Icon,
  data,
}: {
  icon: React.ComponentType<{ className?: string }>
  data: { title: string; desc: string }
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 transition-colors group-hover:bg-gold/25">
        <Icon className="h-7 w-7 text-gold" />
      </div>
      <h3 className="mb-3 font-serif text-xl font-bold text-primary">
        {data.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {data.desc}
      </p>
    </div>
  )
}

export function ServicesSection() {
  const { isAr } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="bg-background py-24 lg:py-32">
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
            {isAr ? "خدماتنا" : "Our Services"}
          </span>
          <div className="h-px w-12 bg-gold" />
        </div>

        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-primary sm:text-4xl text-balance">
          {isAr
            ? "خدمات مصممة للتنفيذ بمعايير عالية"
            : "Services Built for High-Standard Delivery"}
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          {isAr
            ? "نقدم مجموعة شاملة من خدمات المقاولات والبناء بأعلى معايير الجودة"
            : "A comprehensive suite of contracting and construction services delivered to the highest quality standards"}
        </p>

        {/* Top row: 3 cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => {
            const data = isAr ? service.ar : service.en
            return (
              <ServiceCard key={data.title} icon={service.icon} data={data} />
            )
          })}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:max-w-[66.666%]">
          {services.slice(3).map((service) => {
            const data = isAr ? service.ar : service.en
            return (
              <ServiceCard key={data.title} icon={service.icon} data={data} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
