"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"



const projects = [
  { name: "Dubai Municipality", category: "Government", location: "Dubai", filter: ["Government", "LED Screens"], image: "/images/proj_dubai_municipality.jpg" },
  { name: "Al Jalila Foundation", category: "Healthcare", location: "Dubai Healthcare City", filter: ["Healthcare", "LED Screens"], image: "/images/proj_al_jalila.jpg" },
  { name: "Toyota Showroom", category: "Retail", location: "Dubai Festival City", filter: ["Retail", "LED Screens"], image: "/images/proj_toyota_showroom.jpg" },
  { name: "Emirates Global Aluminium", category: "Corporate", location: "Abu Dhabi", filter: ["Corporate", "LCD & Video Wall"], image: "/images/proj_ega_abudhabi.jpg" },
  { name: "Nakheel Sales Center", category: "Corporate", location: "Palm Jumeirah", filter: ["Corporate", "LED Screens"], image: "/images/proj_nakheel_sales.jpg" },
  { name: "Fujairah Chess Club", category: "Sports", location: "Fujairah", filter: ["Sports", "LED Screens"], image: "/images/proj_fujairah_chess.jpg" },
  { name: "Dubai Police", category: "Government", location: "Dubai", filter: ["Government", "Events", "LED Screens"], image: "/images/proj_dubai_police.jpg" },
]

// Create varied aspect ratios for masonry effect
const aspectRatios = ["4/3", "1/1", "16/9", "4/3", "1/1", "16/9"]

export function PortfolioSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`section-padding bg-[var(--bg-primary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="Aztech LED Projects Portfolio UAE"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="eyebrow mb-3">OUR WORK</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)] mb-4">
            1,000+ Projects. Every One Matters.
          </h2>
          <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-secondary)] max-w-[600px]">
            A selection from our portfolio across the UAE. From architectural lighting to stadium perimeter screens — Aztech delivers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="group relative overflow-hidden rounded-[var(--radius-md)] cursor-pointer aspect-[4/3]"
            >
              {/* Project image */}
              <Image 
                src={project.image}
                alt={`${project.name} LED screen installation in ${project.location}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[rgba(27,58,92,0.92)] translate-y-full group-hover:translate-y-0 transition-transform duration-350 flex flex-col justify-end p-6">
                <span className="inline-block self-start font-sans text-[0.68rem] font-medium px-2 py-1 rounded-[var(--radius-full)] bg-[var(--copper-light)] text-[var(--bg-dark)] mb-2">
                  {project.category}
                </span>
                <h3 className="font-sans text-[1rem] font-bold text-white mb-1">
                  {project.name}
                </h3>
                <p className="font-sans text-[0.8rem] text-white/70 mb-4">
                  {project.location}
                </p>
                <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Image zoom effect */}
              <div className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-transparent border-[1.5px] border-[var(--accent)] text-[var(--accent)] font-sans text-[0.9rem] font-semibold rounded-[var(--radius-sm)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200"
          >
            Request Full Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
