"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

const filters = [
  "All",
  "LED Screens",
  "Outdoor",
  "LCD & Video Wall",
  "LED Lighting",
  "Government",
  "Events",
]

const projects = [
  { name: "ADNOC Headquarters", category: "LED Screens", location: "Abu Dhabi", filter: ["LED Screens", "Government"], image: "/images/proj_adnoc_1774784409133.webp" },
  { name: "RTA Dubai", category: "Government", location: "Dubai", filter: ["Government"], image: "/images/proj_rta_1774784465970.webp" },
  { name: "Dubai Cricket Stadium", category: "Sports", location: "Dubai", filter: ["Outdoor", "LED Screens"], image: "/images/proj_cricket_1774784549601.webp" },
  { name: "Wafi Mall", category: "Retail", location: "Dubai", filter: ["LED Screens"], image: "/images/proj_wafi_1774784593202.webp" },
  { name: "Dubai Mall", category: "Retail", location: "Dubai", filter: ["LED Screens"], image: "/images/proj_dubaimall_1774784635796.webp" },
  { name: "Zulekha Hospital", category: "Healthcare", location: "Dubai", filter: ["LED Screens", "LCD & Video Wall"], image: "/images/proj_zulekha.webp" },
  { name: "Rove Hotels Group", category: "Hospitality", location: "Dubai", filter: ["LED Screens"], image: "/images/proj_rove.webp" },
  { name: "Parliament Palace Abu Dhabi", category: "Government", location: "Abu Dhabi", filter: ["Government", "LED Screens"], image: "/images/proj_parliament.webp" },
  { name: "GEMS Schools UAE", category: "Education", location: "Dubai", filter: ["LED Screens"], image: "/images/proj_gems.webp" },
  { name: "Carrefour UAE", category: "Retail", location: "Multiple", filter: ["LED Screens"], image: "/images/proj_carrefour.webp" },
  { name: "Expo 2020 Dubai", category: "Events", location: "Dubai", filter: ["Events", "LED Screens"], image: "/images/proj_expo.webp" },
  { name: "Oberoi Hotel", category: "Hospitality", location: "Dubai", filter: ["LED Screens", "LED Lighting"], image: "/images/proj_oberoi.webp" },
  { name: "Dubai Media City P1.86", category: "Corporate", location: "Dubai", filter: ["LED Screens"], image: "/images/proj_mediacity.webp" },
  { name: "Ajman Municipality", category: "Government", location: "Ajman", filter: ["Government", "LED Screens"], image: "/images/proj_ajman.webp" },
  { name: "Fujairah Aviation Club", category: "Events", location: "Fujairah", filter: ["Events", "Outdoor"], image: "/images/proj_fujairah.webp" },
  { name: "Sheikh Hamdan Palace", category: "Government", location: "Dubai", filter: ["Government", "LED Lighting"], image: "/images/proj_hamdan.webp" },
  { name: "Curve Screen Oman", category: "International", location: "Oman", filter: ["LED Screens"], image: "/images/proj_oman.webp" },
  { name: "Dubai Cricket Stadium Perimeter", category: "Sports", location: "Dubai", filter: ["Outdoor"], image: "/images/proj_perimeter.webp" },
]

// Create varied aspect ratios for masonry effect
const aspectRatios = ["4/3", "1/1", "16/9", "4/3", "1/1", "16/9"]

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const { ref, isVisible } = useReveal()

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.filter.includes(activeFilter))

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

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 font-sans text-[0.82rem] font-medium rounded-[var(--radius-full)] border transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid - Masonry style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.name}
              className="group relative break-inside-avoid overflow-hidden rounded-[var(--radius-md)] cursor-pointer"
              style={{ aspectRatio: aspectRatios[index % aspectRatios.length] }}
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
