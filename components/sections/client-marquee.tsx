"use client"

import Image from "next/image"
import { trustedBrands } from "../../lib/trustedBrands"

const row1 = trustedBrands.slice(0, 18)
const row2 = trustedBrands.slice(18, 36)
const row3 = trustedBrands.slice(36, 54)
const row4 = trustedBrands.slice(54, 72)

function MarqueeRow({ 
  clients, 
  direction 
}: { 
  clients: string[]
  direction: "left" | "right" 
}) {
  const duplicatedClients = [...clients, ...clients]
  
  return (
    <div 
      className="group flex overflow-hidden marquee-mask h-24 my-2"
      onMouseEnter={(e) => {
        const inner = e.currentTarget.querySelector(".marquee-inner") as HTMLElement
        if (inner) inner.style.animationPlayState = "paused"
      }}
      onMouseLeave={(e) => {
        const inner = e.currentTarget.querySelector(".marquee-inner") as HTMLElement
        if (inner) inner.style.animationPlayState = "running"
      }}
    >
      <div 
        className={`marquee-inner flex items-center gap-0 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {duplicatedClients.map((client, index) => (
          <div key={`${client}-${index}`} className="flex items-center justify-center shrink-0 px-6 sm:px-10">
            <div className="relative h-12 w-28 sm:h-16 sm:w-36 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <Image 
                src={client} 
                alt="Trusted Brand Logo" 
                fill
                sizes="(max-width: 768px) 112px, 144px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ClientMarquee() {
  return (
    <section 
      className="bg-[var(--bg-primary)] py-12"
      aria-label="Trusted by leading brands"
    >
      <div className="text-center mb-10">
        <p className="font-sans text-[0.9rem] font-bold tracking-[0.15em] uppercase text-[var(--text-muted)]">
          TRUSTED BY UAE&apos;S LEADING BRANDS
        </p>
      </div>
      
      <div className="flex flex-col gap-2 overflow-hidden">
        <MarqueeRow clients={row1} direction="left" />
        <MarqueeRow clients={row2} direction="right" />
        <MarqueeRow clients={row3} direction="left" />
        <MarqueeRow clients={row4} direction="right" />
      </div>
    </section>
  )
}
