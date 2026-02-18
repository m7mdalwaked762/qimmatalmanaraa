import type { Metadata, Viewport } from "next"
import { Roboto, Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
})

const _tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Qimmat Al Manara | Elite General Contracting",
  description:
    "Qimmat Al Manara - 20+ years of excellence in general contracting, construction, residential, commercial, and administrative projects with precision, quality, and on-time commitment.",
  keywords: [
    "construction",
    "general contracting",
    "building",
    "residential projects",
    "commercial projects",
    "Qimmat Al Manara",
    "contracting company",
    "engineering supervision",
    "قمة المنارة",
    "مقاولات عامة",
    "بناء",
    "مشاريع سكنية",
    "مشاريع تجارية",
    "إشراف هندسي",
  ],
  openGraph: {
    title: "Qimmat Al Manara | Elite General Contracting",
    description:
      "Building Excellence. Delivering Trust. 20+ years in general contracting and construction.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    siteName: "Qimmat Al Manara",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimmat Al Manara | Elite General Contracting",
    description:
      "Building Excellence. Delivering Trust. 20+ years in general contracting and construction.",
  },
  
}

export const viewport: Viewport = {
  themeColor: "#455062",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${_roboto.variable} ${_tajawal.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
