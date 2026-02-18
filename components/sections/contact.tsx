"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Phone, Mail, MapPin, Clock, PhoneCall, Send } from "lucide-react"

const contactItems = [
  {
    icon: Phone,
    en: { label: "Phone", value: "+962 0 7 9699 5573" },
    ar: { label: "الهاتف", value: "+962 0 7 9699 5573" },
  },
  {
    icon: Mail,
    en: { label: "Email", value: "info@qimmatalmanara.com" },
    ar: { label: "البريد الإلكتروني", value: "info@qimmatalmanara.com" },
  },
  {
    icon: MapPin,
    en: { label: "Address", value: "Amman, Jordan" },
    ar: { label: "العنوان", value: "عمان، الأردن" },
  },
  {
    icon: Clock,
    en: { label: "Working Hours", value: "Sun - Thu: 8AM - 6PM" },
    ar: { label: "ساعات العمل", value: "الأحد - الخميس: 8 ص - 6 م" },
  },
]

export function ContactSection() {
  const { isAr } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
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
            {isAr ? "تواصل معنا" : "Get in Touch"}
          </span>
          <div className="h-px w-12 bg-gold" />
        </div>

        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-primary sm:text-4xl text-balance">
          {isAr ? "تواصل معنا" : "Contact"}
        </h2>

        <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">
          {isAr
            ? "نحن هنا للإجابة على استفساراتكم ومناقشة مشاريعكم المستقبلية"
            : "We are here to answer your inquiries and discuss your upcoming projects"}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => {
            const data = isAr ? item.ar : item.en
            return (
              <div
                key={data.label}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {data.label}
                </h3>
                <p className="font-medium text-primary">{data.value}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+9620796995573"
            className="inline-flex items-center gap-2 rounded-2xl bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold/90 hover:shadow-lg"
          >
            <PhoneCall className="h-4 w-4" />
            {isAr ? "اتصل الآن" : "Call Now"}
          </a>
          <a
            href="mailto:info@qimmatalmanara.com"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-gold px-8 py-3.5 text-sm font-semibold text-gold transition-all hover:bg-gold/10"
          >
            <Send className="h-4 w-4" />
            {isAr ? "راسلنا" : "Email Us"}
          </a>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-secondary">
          <div className="flex h-64 items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <MapPin className="h-10 w-10 text-gold/50" />
              <span className="text-sm font-medium">
                {isAr ? "موقعنا على الخريطة" : "Map Location Placeholder"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
