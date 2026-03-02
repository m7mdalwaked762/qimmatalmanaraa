"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#about", en: "About", ar: "من نحن" },
  { href: "#vision", en: "Vision", ar: "الرؤية" },
  { href: "#services", en: "Services", ar: "خدماتنا" },
  { href: "#process", en: "Process", ar: "المنهجية" },
  { href: "#achievements", en: "Achievements", ar: "إنجازاتنا" },
  { href: "#contact", en: "Contact", ar: "تواصل" },
]

export function Footer() {
  const { isAr } = useLanguage()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-navy py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt={isAr ? "قمة المنارة" : "Qimmat Al Manara"}
              width={440}
              height={160}
              className="mb-6 h-40 w-auto"
            />
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              {isAr
                ? "شركة مقاولات رائدة تقدم حلول بناء متميزة منذ أكثر من عشرين عاماً."
                : "A leading contracting company delivering premium construction solutions for over two decades."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
                  >
                    {isAr ? link.ar : link.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              {isAr ? "معلومات التواصل" : "Contact Info"}
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
  <a
    href="tel:+962796995573"
    dir="ltr"
    className="transition-colors hover:text-gold"
    style={{ unicodeBidi: "embed" }}
  >
    +962 7 9699 5573
  </a>
</li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>info@qimmatalmanara.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {isAr ? "عمان، الأردن" : "Amman, Jordan"}
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              {isAr ? "تابعنا" : "Follow Us"}
            </h4>
            <div className="flex gap-3">
             
              <a
  href="https://www.facebook.com/people/Qimmat-Almanara/61588431740433/"
  target="_blank"
  aria-label="Facebook"
  className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-gold/20 hover:text-gold"
>
  <svg
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.696h-3.123V24h6.116C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0z" />
  </svg>
</a>
             
              {/* Instagram */}
              <a
                href="https://www.instagram.com/qimmat.almanara"
                target="_blank"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-gold/20 hover:text-gold"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            {isAr
              ? `\u00A9 ${new Date().getFullYear()} قمة المنارة. جميع الحقوق محفوظة.`
              : `\u00A9 ${new Date().getFullYear()} Qimmat Al Manara. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
