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
  ...Array.from({ length: 23 }, (_, i) => ({
    type: "image" as const,
    src: `/images/${i + 2}.jpeg`,
    en: `Project Image ${i + 1}`,
    ar: `صورة مشروع ${i + 1}`,
  })),
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
    <section id="gallery" className="bg-secondary py-16 sm:py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Title */}
        <h2 className="mb-10 sm:mb-16 text-center font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
          {isAr ? "معرض الأعمال" : "Gallery"}
        </h2>

        {/* Masonry Grid */}
        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4">
          {media.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-xl sm:rounded-2xl bg-navy shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={isAr ? item.ar : item.en}
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
                    playsInline
                    preload="metadata"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-navy/20 group-hover:bg-navy/30 transition-colors duration-300">
                    <span className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gold/90 text-navy shadow-lg">
                      <Play className="h-5 w-5 sm:h-7 sm:w-7 fill-navy" />
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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-2 sm:p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 sm:right-4 sm:top-4 z-10 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-colors duration-200"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy transition-colors duration-200"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
            {(activeIndex ?? 0) + 1} / {media.length}
          </div>

          {/* Content */}
          <div
            className="flex max-h-[85vh] w-full max-w-5xl items-center justify-center px-10 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === "image" ? (
              <img
                src={active.src}
                alt={isAr ? active.ar : active.en}
                className="max-h-[85vh] w-auto max-w-full rounded-xl sm:rounded-2xl object-contain shadow-2xl"
              />
            ) : (
              <video
                key={active.src}
                src={active.src}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] w-auto max-w-full rounded-xl sm:rounded-2xl shadow-2xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}