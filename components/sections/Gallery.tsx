"use client"

import { useState, useEffect, useCallback } from "react"
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
    <section
      id="gallery"
      style={{ backgroundColor: "var(--secondary)", paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1rem",
          transition: "opacity 0.7s, transform 0.7s",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(2rem)",
        }}
      >
        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: "bold",
            color: "var(--primary)",
          }}
        >
          {isAr ? "معرض الأعمال" : "Gallery"}
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "12px",
          }}
        >
          {media.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActiveIndex(i)}
              style={{
                position: "relative",
                display: "block",
                width: "100%",
                height: "220px",
                overflow: "hidden",
                borderRadius: "12px",
                backgroundColor: "#0a1628",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {item.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={isAr ? item.ar : item.en}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {/* Overlay */}
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(10,22,40,0.35)",
                    }}
                  >
                    <span
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(212,175,55,0.92)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Play style={{ width: "22px", height: "22px", fill: "#0a1628", color: "#0a1628" }} />
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
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(10,22,40,0.97)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 10,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <X style={{ width: "20px", height: "20px" }} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <ChevronLeft style={{ width: "20px", height: "20px" }} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <ChevronRight style={{ width: "20px", height: "20px" }} />
          </button>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "white",
              borderRadius: "999px",
              padding: "4px 14px",
              fontSize: "14px",
            }}
          >
            {(activeIndex ?? 0) + 1} / {media.length}
          </div>

          {/* Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "900px",
              width: "100%",
              maxHeight: "85vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 52px",
            }}
          >
            {active.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={active.src}
                alt={isAr ? active.ar : active.en}
                style={{
                  maxHeight: "85vh",
                  maxWidth: "100%",
                  width: "auto",
                  borderRadius: "12px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            ) : (
              <video
                key={active.src}
                src={active.src}
                controls
                autoPlay
                playsInline
                style={{
                  maxHeight: "85vh",
                  maxWidth: "100%",
                  width: "auto",
                  borderRadius: "12px",
                  display: "block",
                }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}