"use client"

import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { VisionSection } from "@/components/sections/vision"
import { ServicesSection } from "@/components/sections/services"
import { ProcessSection } from "@/components/sections/process"
import { AchievementsSection } from "@/components/sections/achievements"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Qimmat Al Manara",
  alternateName: "قمة المنارة",
  description:
    "Leading general contracting company with 20+ years of experience delivering residential, commercial, and administrative projects with precision, quality, and on-time commitment.",
  url: "https://qimmat-almanara.com",
  telephone: "+962 0 7 9699 5573",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amman",
    addressCountry: "JOR",
  },
  areaServed: {
    "@type": "Country",
    name: "Jordan",
  },
  foundingDate: "2004",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
  },
  knowsAbout: [
    "General Contracting",
    "Construction",
    "Engineering Supervision",
    "Structural Works",
    "Finishing Works",
    "Pools & Water Features",
  ],
}






export default function Home() {
  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ServicesSection />
        <ProcessSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
