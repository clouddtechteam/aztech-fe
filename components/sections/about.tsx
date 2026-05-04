"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Package, Shield, Headphones, ArrowRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

const achievements = [
  { icon: Zap, title: "In-House Team", subtitle: "Design to installation" },
  { icon: Package, title: "Large Stock", subtitle: "Ready for fast delivery" },
  { icon: Shield, title: "Quality Assured", subtitle: "Warranty on all products" },
  { icon: Headphones, title: "After-Sales AMC", subtitle: "Maintenance contracts" },
]

export function AboutSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      id="about" 
      className={`section-padding bg-[var(--bg-primary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="About Aztech LED Screens Private Limited"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="grid lg:grid-cols-[52%_48%] gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div>
            <p className="eyebrow mb-3">WHO WE ARE</p>
            
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)] mb-5">
              Dubai&apos;s Legacy,<br />Now In India
            </h2>
            
            <div className="w-12 h-[2px] bg-[var(--accent)] mb-5" aria-hidden="true" />
            
            <p className="font-sans text-[1.1rem] font-light leading-[1.8] text-[var(--text-secondary)] mb-5">
              After establishing ourselves as a well-known industry leader in Dubai for over 20 years, Aztech LED is thrilled to launch our operations in India for the very first time. From our roots in Karama, Dubai — where we served government ministries, international hotel chains, and stadiums — we are now delivering that exact same world-class standard across India.
            </p>
            
            <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-body)] mb-5">
              We began by projecting light onto building facades, bridges, and hotel exteriors — turning architecture into landmarks across the UAE. That obsession with quality and precision carries into everything we do today: indoor LED screens that command attention, outdoor displays built for the Indian climate, and custom installations that no one else can deliver.
            </p>
            
            <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-body)] mb-6">
              Unlike resellers, we maintain full in-house capability. Our team designs, fabricates, installs, and services every project from start to finish. No subcontractors. No finger-pointing. Just accountable, professional service — backed by our direct Dubai supply chain that keeps your project on schedule.
            </p>

            {/* Corporate Structure */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex-1 flex flex-col gap-0.5 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-[var(--radius-sm)] px-4 py-3">
                <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">Head Office</span>
                <span className="font-sans text-[0.85rem] font-medium text-[var(--text-primary)] leading-[1.4]">Aztech General Trading LLC</span>
                <span className="font-sans text-[0.78rem] text-[var(--text-muted)]">Dubai, UAE</span>
              </div>
              <div className="flex-1 flex flex-col gap-0.5 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-[var(--radius-sm)] px-4 py-3">
                <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--copper)]">Sister Concern</span>
                <span className="font-sans text-[0.85rem] font-medium text-[var(--text-primary)] leading-[1.4]">Lamps Plus Electronics Trading LLC</span>
                <span className="font-sans text-[0.78rem] text-[var(--text-muted)]">Dubai, UAE</span>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 font-sans text-[0.9rem] font-medium text-[var(--accent)] hover:underline"
            >
              Discuss Your Project With Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Visual */}
          <div>
            {/* About image */}
            <div className="relative aspect-[4/3] rounded-[var(--radius-md)] mb-4 overflow-hidden">
              <Image 
                src="/images/about_team_install_1774782278140.webp"
                alt="Professional office team collaborating on LED display projects"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute top-4 right-4 bg-[var(--accent)] text-white font-sans text-[0.7rem] font-medium px-[10px] py-1 rounded-[2px]">
                Dubai Expertise · India Presence
              </div>
            </div>
            
            {/* Achievement cards */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((item) => (
                <div 
                  key={item.title}
                  className="bg-[var(--bg-secondary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-light)]"
                >
                  <item.icon className="w-6 h-6 text-[var(--accent-mid)] mb-2" aria-hidden="true" />
                  <h3 className="font-sans text-[0.85rem] font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[0.78rem] text-[var(--text-secondary)]">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
