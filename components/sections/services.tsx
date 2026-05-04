"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

const services = [
  {
    tag: "LED Screen Supply",
    title: "Supply Of Premium LED Displays",
    description: "We supply the full spectrum of LED screen types — indoor, outdoor, specialty, rental and niche displays. All products come with manufacturer warranty, locally-stocked for fast dispatch across UAE. We advise on the right pixel pitch, brightness, and panel configuration for your specific environment and viewing distance.",
    specs: ["P1.2 to P10 pixel pitch range", "1000–8000 nits brightness", "UAE-stocked, fast dispatch"],
    imagePosition: "right",
    image: "/images/service_components_1774782522853.webp",
  },
  {
    tag: "Design & Fabrication",
    title: "Custom Design & In-House Manufacturing",
    description: "Not every space fits a standard screen. Our in-house design team creates LED solutions for any shape, size, and architectural constraint — curved screens, spherical displays, custom cabinets, and creative installations. We produce technical drawings, structural calculations, and fabrication — all under one roof.",
    specs: ["Custom shapes: curves, spheres, cylinders", "Structural drawings provided", "Full fabrication in-house"],
    imagePosition: "left",
    image: "/images/service_software_1774782562265.webp",
  },
  {
    tag: "Installation & Commissioning",
    title: "Professional Installation Across UAE",
    description: "Our certified installation teams manage the complete process: site survey, structural mount design, cable routing, screen assembly, controller configuration, and final commissioning test. We work to schedule, we work clean, and we don't leave until the screen performs perfectly.",
    specs: ["Site survey included", "Certified installation engineers", "Full commissioning & handover"],
    imagePosition: "right",
    image: "/images/service_install_1774782503987.webp",
  },
  {
    tag: "Architectural Lighting",
    title: "Exterior & Facade LED Lighting",
    description: "Our roots are in architectural lighting — transforming the faces of buildings, bridges, hotels and villas with programmable LED profiles and facade illumination. We have lit some of Dubai's most recognizable addresses: Downtown Dubai, Sheikh Hamdan Palace, IKEA Festival City, and Dubai Mall exteriors.",
    specs: ["DALI & DMX programmable", "IP67/IP68 rated profiles", "Custom color temperature"],
    imagePosition: "left",
    image: "/images/service_facade_1774782541436.webp",
  },
  {
    tag: "After-Sales & AMC",
    title: "Ongoing Maintenance & Support",
    description: "LED screens are long-term investments. We protect that investment with Annual Maintenance Contracts (AMC) covering preventive maintenance, emergency callouts, spare parts, and remote monitoring. Our UAE-based support team responds within 24 hours to any fault — minimizing downtime for your business.",
    specs: ["AMC contracts available", "24hr response SLA", "Spare parts in UAE stock"],
    imagePosition: "right",
    image: "/images/service_maintenance_1774782580512.webp",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      id="services" 
      className={`section-padding bg-[var(--bg-secondary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="Our services"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">OUR SERVICES</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)]">
            What We Do For You
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-[var(--radius-md)] overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 ${service.imagePosition === "left" ? "lg:grid-flow-dense" : ""}`}>
                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${service.imagePosition === "left" ? "lg:col-start-2" : ""}`}>
                  <span className="inline-block self-start font-sans text-[0.72rem] font-semibold px-3 py-1 bg-[var(--accent-light)] text-[var(--accent)] rounded-[var(--radius-full)] mb-4">
                    {service.tag}
                  </span>
                  
                  <h3 className="font-sans text-[1.4rem] font-bold text-[var(--text-primary)] mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-[0.95rem] leading-[1.75] text-[var(--text-body)] mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="flex flex-col gap-2">
                    {service.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--success)]" aria-hidden="true" />
                        <span className="font-sans text-[0.88rem] text-[var(--text-secondary)]">
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Service image */}
                <div className={`aspect-[4/3] lg:aspect-auto relative overflow-hidden ${service.imagePosition === "left" ? "lg:col-start-1" : ""}`}>
                  <Image 
                    src={service.image}
                    alt={`${service.title} - LED screen services in UAE`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
