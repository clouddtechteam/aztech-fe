"use client"

const clientsRow1 = [
  "ADNOC Headquarters",
  "RTA Dubai",
  "Dubai Cricket Stadium",
  "Wafi Mall",
  "Dubai Mall",
  "Carrefour UAE",
  "Zulekha Hospital",
  "Rove Hotels",
  "GEMS Schools",
  "Oberoi Hotel",
]

const clientsRow2 = [
  "Sharaf Exchange",
  "Union Coop",
  "IBM Abu Dhabi",
  "Parliament Palace Abu Dhabi",
  "Ajman Municipality",
  "Fujairah Aviation Club",
  "CBD Bank",
  "Avenue Mall",
  "Deira City Centre",
  "Goldstate Hotel",
]

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
      className="group flex overflow-hidden marquee-mask h-12"
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
          <div key={`${client}-${index}`} className="flex items-center shrink-0">
            <span className="font-sans text-[1rem] font-semibold text-[var(--text-secondary)] whitespace-nowrap px-4">
              {client}
            </span>
            <span 
              className="w-[6px] h-[6px] rounded-full bg-[var(--copper)] opacity-60 shrink-0"
              aria-hidden="true"
            />
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
      <div className="text-center mb-7">
        <p className="font-sans text-[0.72rem] font-medium tracking-[0.18em] uppercase text-[var(--text-muted)]">
          TRUSTED BY UAE&apos;S LEADING BRANDS
        </p>
      </div>
      
      <div className="flex flex-col gap-2">
        <MarqueeRow clients={clientsRow1} direction="left" />
        <MarqueeRow clients={clientsRow2} direction="right" />
      </div>
    </section>
  )
}
