"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"

type MediaItem =
  | { type: "image"; src: string; en: string; ar: string }
  | { type: "video"; src: string; poster?: string; en: string; ar: string }

const media: MediaItem[] = [
  // Images
  ...Array.from({ length: 23 }, (_, i) => ({
    type: "image" as const,
    src: `/images/${i + 2}.jpeg`,
    en: `Project Image ${i + 1}`,
    ar: `صورة مشروع ${i + 1}`,
  })),

  // Videos
  {
    type: "video",
    src: "/images/25.mp4",
    en: "Project Video 1",
    ar: "فيديو المشروع 1",
  },
  {
    type: "video",
    src: "/images/26.mp4",
    en: "Project Video 2",
    ar: "فيديو المشروع 2",
  },
  {
    type: "video",
    src: "/images/q1.mov",
    en: "Q1 Video",
    ar: "فيديو Q1",
  },
  {
    type: "video",
    src: "/images/Qema 2 Editr .mov",
    en: "Qema Edit",
    ar: "تعديل قمة",
  },
  {
    type: "video",
    src: "/images/QEMQ 1 NEW .mov",
    en: "New Video",
    ar: "فيديو جديد",
  },
]

export default function Gallery() {
  const { isAr } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % media.length)),
    []
  )
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + media.length) % media.length)),
    []
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [activeIndex, close, next, prev])

  const active = activeIndex === null ? null : media[activeIndex]

  return (
    <section id="gallery" className="bg-secondary py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Title */}
        <h2 className="mb-16 text-center font-serif text-3xl font-bold text-primary sm:text-4xl">
          {isAr ? "معرض الأعمال" : "Gallery"}
        </h2>

        {/* Masonry Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {media.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl bg-navy shadow-sm"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt=""
                  width={800}
                  height={600}
                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    className="h-auto w-full object-contain"
                    muted
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-navy">
                      <Play className="h-7 w-7 fill-navy" />
                    </span>
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Content */}
          <div
            className="flex max-h-[90vh] w-full max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === "image" ? (
              <img
                src={active.src}
                alt=""
                className="max-h-[90vh] w-auto max-w-full rounded-2xl object-contain"
              />
            ) : (
              <video
                src={active.src}
                controls
                autoPlay
                className="max-h-[90vh] w-auto max-w-full rounded-2xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}