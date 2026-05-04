"use client"

import { useEffect, useRef } from "react"
import { Check } from "lucide-react"

const trustBadges = [
  "In-house installation team",
  "Fast delivery across India",
  "20+ years Dubai experience",
]

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return
    const raf = requestAnimationFrame(() => el.setAttribute("data-animate", "true"))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    let raf: number

    const tick = () => {
      const video = videoRef.current

      if (video) {
        if (video.paused && !video.seeking) video.play().catch(() => {})
        if (video.playbackRate !== 1) video.playbackRate = 1
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div ref={sectionRef} id="home" className="relative z-10" aria-label="Aztech LED Screens - LED Screen Supplier in India">
      <div className="relative min-h-[calc(100vh-36px)] w-full overflow-hidden bg-[var(--bg-dark)]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-[44%_50%]"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          aria-label="LED module animation"
        >
          <source src="/videos/aztech-hero-cinematic.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,16,0.12)_0%,rgba(7,10,16,0.36)_35%,rgba(7,10,16,0.77)_64%,rgba(7,10,16,0.95)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_43%_55%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.07)_16%,rgba(28,74,151,0.1)_30%,rgba(7,10,16,0)_52%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(7,10,16,0)_22%,rgba(7,10,16,0.5)_100%)]" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-[64%] bg-[radial-gradient(circle_at_72%_42%,rgba(28,74,151,0.2),rgba(28,74,151,0)_48%)]" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/22 to-transparent" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[calc(100vh-36px)] flex-col">
          <div ref={textRef} className="relative flex flex-1 flex-col justify-center px-[var(--section-pad-x)] pt-[120px] pb-12 lg:min-h-[calc(100vh-36px)] lg:items-end lg:pt-[126px] lg:pb-12">
            <div className="relative w-full max-w-[590px] lg:mr-[2.25vw]">
              <div className="hero-item mb-5 flex items-center gap-4" style={{ "--hero-delay": "0ms" } as React.CSSProperties}>
                <span className="h-px w-12 bg-[var(--accent-dark-visible)]" aria-hidden="true" />
                <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/72">
                  DUBAI&apos;S #1 LED EXPERTS, NOW IN INDIA
                </p>
              </div>
              <h1
                className="font-serif hero-item mb-6 max-w-[590px] font-extrabold leading-[0.96] text-white drop-shadow-[0_10px_36px_rgba(0,0,0,0.52)]"
                style={{ fontSize: "clamp(3.2rem,4.85vw,5.35rem)", "--hero-delay": "100ms" } as React.CSSProperties}
              >
                Illuminate<br />
                <span className="relative inline-block pl-[0.04em]">Your Vision</span>
              </h1>
              <p
                className="font-sans hero-item mb-7 max-w-[525px] font-light leading-[1.72] text-white/76 lg:mb-8"
                style={{ fontSize: "clamp(0.98rem,0.98vw,1.06rem)", "--hero-delay": "200ms" } as React.CSSProperties}
              >
                For over 20 years, we&apos;ve illuminated Dubai&apos;s iconic landmarks and served 500+ premium clients across the Middle East. Now, for the first time ever, Aztech brings our world-class LED display expertise directly to India.
              </p>
              <div className="flex hero-item mb-7 flex-wrap gap-4 lg:mb-8" style={{ "--hero-delay": "300ms" } as React.CSSProperties}>
                <a href="#contact" className="inline-flex min-h-12 min-w-[208px] items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent)] px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_14px_38px_rgba(28,74,151,0.28)] transition-all duration-200 hover:-translate-y-px hover:bg-[var(--accent-hover)] hover:shadow-[0_18px_44px_rgba(28,74,151,0.34)]">
                  Get a Free Quote
                </a>
                <a href="#projects" className="inline-flex min-h-12 min-w-[218px] items-center justify-center rounded-[var(--radius-sm)] border border-white/36 bg-white/[0.06] px-7 py-3.5 font-sans text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/72 hover:bg-white/[0.12]">
                  View Our Projects
                </a>
              </div>
              <div className="grid hero-item max-w-[560px] grid-cols-1 gap-x-7 gap-y-3.5 border-t border-white/18 pt-5 sm:grid-cols-2" style={{ "--hero-delay": "400ms" } as React.CSSProperties}>
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[var(--accent-dark-visible)]" aria-hidden="true" />
                    <span className="font-sans text-[0.82rem] text-white/74">{badge}</span>
                  </div>
                ))}
              </div>
              <div className="hidden hero-item mt-7 items-center gap-3 lg:flex" style={{ "--hero-delay": "700ms" } as React.CSSProperties}>
                <div className="relative h-8 w-px bg-white/35">
                  <div className="absolute top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--accent-dark-visible)] shadow-[0_0_18px_rgba(73,116,186,0.75)]" />
                </div>
                <span className="font-sans text-[0.64rem] uppercase tracking-[0.26em] text-white/52">Scroll to explore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
