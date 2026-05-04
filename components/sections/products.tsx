"use client"

import { useEffect, useRef, useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"
import { 
  Monitor, Sun, Layers, Sparkles, 
  CircleDot, Grid3x3, Square, LayoutGrid,
  Tv, Globe, Maximize, Building,
  Car, TrafficCone, Thermometer, Box
} from "lucide-react"

const products = [
  { icon: Monitor, name: "HD LED Display", description: "Ultra-high resolution, pixel pitch from P1.2", tag: "Indoor", image: "/images/prod_1.webp" },
  { icon: Tv, name: "Indoor LED Display", description: "Vibrant colors for retail, corporate and hospitality", tag: "Indoor", image: "/images/prod_2.webp" },
  { icon: Sun, name: "Outdoor DIP LED Display", description: "Weatherproof, 5000 nits brightness for harsh UAE sun", tag: "Outdoor", image: "/images/prod_3.webp" },
  { icon: Maximize, name: "Outdoor SMD LED Display", description: "Wide viewing angle, excellent color uniformity", tag: "Outdoor", image: "/images/prod_4.webp" },
  { icon: Box, name: "Die-Cast Aluminum LED", description: "Lightweight fast-deploy panels, IP65 rated", tag: "Outdoor", image: "/images/prod_5.webp" },
  { icon: Layers, name: "Curtain / Mesh LED", description: "Semi-transparent for building facades and events", tag: "Specialty", image: "/images/prod_6.webp" },
  { icon: Grid3x3, name: "Front Service LED", description: "Front-access maintenance for built-in wall installations", tag: "Indoor", image: "/images/prod_7.webp" },
  { icon: Square, name: "Floor LED Display", description: "Load-bearing interactive floor screens, 1000kg/m² rated", tag: "Specialty", image: "/images/prod_8.webp" },
  { icon: LayoutGrid, name: "Poster LED Display", description: "Slim standalone portrait LED for promotions", tag: "Indoor", image: "/images/prod_9.webp" },
  { icon: Sparkles, name: "Transparent Glass LED", description: "See-through film or glass LED for storefronts", tag: "Specialty", image: "/images/prod_10.webp" },
  { icon: CircleDot, name: "Perimeter LED Display", description: "Sports stadium perimeter advertising boards", tag: "Outdoor", image: "/images/prod_11.webp" },
  { icon: Layers, name: "Curve LED Display", description: "Flexible curved screens for creative installations", tag: "Specialty", image: "/images/prod_12.webp" },
  { icon: Globe, name: "Spherical LED Display", description: "360° globe displays for exhibitions and lobbies", tag: "Specialty", image: "/images/prod_13.webp" },
  { icon: Sparkles, name: "Creative Shape LED", description: "Any irregular shape — cylinders, letters, cubes", tag: "Specialty", image: "/images/prod_14.webp" },
  { icon: Building, name: "Gas Price LED Display", description: "UAE petrol station price boards, RTA compliant", tag: "Niche", image: "/images/prod_15.webp" },
  { icon: Car, name: "Taxi Rooftop LED", description: "Dubai taxi advertising, RTA-approved systems", tag: "Niche", image: "/images/prod_16.webp" },
  { icon: TrafficCone, name: "Traffic LED Display", description: "Road information, variable message signs", tag: "Niche", image: "/images/prod_17.webp" },
  { icon: Monitor, name: "LCD Video Wall", description: "Seamless LCD panels for control rooms, lobbies, command centers", tag: "Indoor", image: "/images/prod_18.webp" },
]

const tagColors: Record<string, string> = {
  Indoor: "bg-[var(--accent-light)] text-[var(--accent)]",
  Outdoor: "bg-[#FEF3E2] text-[#B5722A]",
  Specialty: "bg-[#F0F4F8] text-[#4A7BA7]",
  Niche: "bg-[#F5F0E8] text-[#6B5D45]",
}

export function ProductsSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      id="products" 
      className={`section-padding bg-[var(--accent)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="LED Screen Products by Aztech UAE"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow !text-white/80 mb-3">WHAT WE SUPPLY</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-white mb-4">
            18 LED Screen Products For Every Need
          </h2>
          <p className="font-sans text-[1rem] leading-[1.75] text-white/70 max-w-[600px] mx-auto">
            From poster-sized indoor displays to stadium-scale outdoor screens — we stock and supply the UAE&apos;s widest range of LED display products.
          </p>
        </div>

        {/* Featured Products Visual Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { name: "Indoor Display Panels", image: "/images/product_indoor_1774782297798.webp" },
            { name: "Outdoor Billboard Modules", image: "/images/product_outdoor_1774782316663.webp" },
            { name: "Transparent Glass LED", image: "/images/product_transparent_1774782335491.webp" },
            { name: "Slim Poster LED", image: "/images/product_poster_1774782355639.webp" },
          ].map((featured) => (
            <div key={featured.name} className="relative aspect-square rounded-[var(--radius-md)] overflow-hidden group shadow-[var(--shadow-card)] border border-white/10 bg-white/5 backdrop-blur-sm">
              <Image 
                src={featured.image} 
                alt={`${featured.name} - high quality product photography`} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-sans text-[1.05rem] font-semibold text-white">{featured.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="group relative bg-white/5 flex flex-col rounded-[var(--radius-md)] overflow-hidden border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              {/* Product Image */}
              <div className="relative aspect-video overflow-hidden bg-white/10">
                 <Image 
                   src={product.image}
                   alt={product.name}
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   loading="lazy"
                   decoding="async"
                   width={400}
                   height={225}
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                 />
                 <div className="absolute top-3 right-3">
                   <span className="inline-block font-sans text-[0.68rem] font-bold px-[10px] py-[3px] rounded-[var(--radius-full)] shadow-sm bg-white/15 text-white border border-white/10 backdrop-blur-sm">
                     {product.tag}
                   </span>
                 </div>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <product.icon className="w-5 h-5 text-white/80 stroke-[1.5]" aria-hidden="true" />
                  <h3 className="font-sans text-[1.05rem] font-semibold text-white">
                    {product.name}
                  </h3>
                </div>
                
                <p className="font-sans text-[0.88rem] text-white/70 line-clamp-2 mt-auto">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-sans text-[0.9rem] text-white/70 mb-4">
            Looking for a specific spec? Get a custom quote.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-white text-[var(--accent)] font-sans text-[0.9rem] font-semibold rounded-[var(--radius-sm)] hover:bg-[var(--accent-light)] hover:text-[var(--accent-dark-visible)] transition-all duration-200"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}
