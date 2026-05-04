"use client"

import { useEffect, useRef, useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"
import { 
  ShoppingBag, Building2, Hotel, Heart, 
  GraduationCap, Landmark, PartyPopper, Trophy,
  ArrowRight
} from "lucide-react"

const industries = [
  {
    id: "retail",
    icon: ShoppingBag,
    name: "Retail & Malls",
    projects: 14,
    title: "Retail & Shopping Malls",
    description: "High-footfall retail environments demand displays that stop shoppers mid-step. Aztech has installed LED screens across UAE's busiest malls and hypermarkets — from entrance fascias to in-aisle promotion screens, digital price boards to checkout displays. Our retail installations are configured for maximum brightness under strong artificial lighting and designed for easy content management.",
    clients: "Carrefour, Union Coop, Wafi Mall, Deira City Centre, Avenue Mall, Center Mall Bur Dubai, Grand Hyper, Grandoose Supermarket, Smart Baby Supermarket, Splash Ajman.",
    image: "/images/portfolio_mall_1774782384373.webp",
    useCases: [],
  },
  {
    id: "corporate",
    icon: Building2,
    name: "Corporate & Office",
    projects: 8,
    title: "Corporate & Office",
    description: "Corporate environments require screens that communicate authority and professionalism. Aztech supplies and installs lobby video walls, boardroom displays, corridor information screens, and reception LED displays for UAE's leading companies. Our corporate installations are configured for perfect viewing at close range with accurate color reproduction.",
    clients: "IBM Abu Dhabi, CBD Bank Green House, Dubai Media City, Vuuzle Studio, Offshore Abu Dhabi.",
    image: "/images/portfolio-corporate.jpg",
    useCases: [],
  },
  {
    id: "hospitality",
    icon: Hotel,
    name: "Hospitality & Hotels",
    projects: 9,
    title: "Hospitality & Hotels",
    description: "Hotels, resorts and restaurants need displays that enhance the guest experience without disrupting the ambiance. Aztech has transformed hotel lobbies, restaurant feature walls, pool-area displays and event hall screens across the UAE hospitality sector — balancing visual impact with aesthetic sensitivity.",
    clients: "Rove Hotels, Goldstate Hotel, Oberoi Hotel, Rotana, Astoria Club, Red Tomato Restaurant.",
    image: "/images/portfolio_hotel_1774782425884.webp",
    useCases: [],
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare & Clinics",
    projects: 4,
    title: "Healthcare & Clinics",
    description: "Healthcare environments demand displays that communicate clearly, queue efficiently, and perform reliably 24/7. Aztech has installed patient information systems, queue management displays, wayfinding screens and pharmacy digital boards at UAE healthcare facilities.",
    clients: "Zulekha Hospital, Cosmos Clinic, Al Marana Pharmacy Delma Mall.",
    image: "/images/proj_zulekha.webp",
    useCases: [],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education & Schools",
    projects: 3,
    title: "Education & Schools",
    description: "From interactive classroom displays to auditorium presentation screens, Aztech equips UAE educational institutions with LED solutions that enhance learning environments. Our education screens are calibrated for comfortable viewing in variable ambient light conditions.",
    clients: "GEMS Schools UAE.",
    image: "/images/proj_gems.webp",
    useCases: [],
  },
  {
    id: "government",
    icon: Landmark,
    name: "Government & Public",
    projects: 7,
    title: "Government & Public Sector",
    description: "Government projects demand the highest standard of reliability, compliance, and professionalism. Aztech's track record includes some of the UAE's most prestigious institutional LED installations — from federal headquarters to municipal offices and royal palaces.",
    clients: "ADNOC Headquarters, RTA Dubai, Ajman Municipality, Parliament Palace Abu Dhabi, Sheikh Hamdan Palace, Sheikh Sayed Road.",
    image: "/images/portfolio_gov_1774782461132.webp",
    useCases: [],
  },
  {
    id: "events",
    icon: PartyPopper,
    name: "Events & Exhibitions",
    projects: 6,
    title: "Events & Exhibitions",
    description: "Live events demand LED screens that can be deployed fast, look spectacular on camera, and perform under pressure. Aztech provides modular rental LED screens for events of any scale — from intimate brand activations to large outdoor concerts and trade shows.",
    clients: "Expo 2020 Dubai, Fujairah Aviation Club, Flexible Screen Expo, Dubike.",
    image: "/images/portfolio-concert.jpg",
    useCases: [],
  },
  {
    id: "sports",
    icon: Trophy,
    name: "Sports & Stadiums",
    projects: 2,
    title: "Sports & Stadiums",
    description: "Stadium installations require the highest brightness, widest viewing angles, and structural-grade mounting. Aztech has delivered perimeter LED systems and large-format outdoor screens for UAE sports venues, engineered to perform under intense sunlight and in front of thousands of spectators.",
    clients: "Dubai Cricket Stadium, Fujairah P4 Outdoor, Astoria Club.",
    image: "/images/portfolio_stadium_1774782441665.webp",
    useCases: ["Perimeter Signage", "Jumbotrons", "Scoreboards"],
  },
]

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("retail")
  const { ref, isVisible } = useReveal()

  const activeIndustry = industries.find(i => i.id === activeTab)!

  return (
    <section 
      ref={ref}
      id="solutions" 
      className={`section-padding bg-[var(--bg-primary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="LED Screen Solutions by Industry"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header - left aligned */}
        <div className="mb-12">
          <p className="eyebrow mb-3">INDUSTRIES WE SERVE</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)] mb-4">
            Every Sector. Every Scale.
          </h2>
          <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-secondary)] max-w-[600px]">
            Aztech has delivered LED screen solutions to 8 major industries across the UAE. Whether it&apos;s a single-screen retail installation or a government command centre — we have the experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
          {/* Tab List */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex-shrink-0 lg:flex-shrink text-left px-5 py-4 rounded-[var(--radius-sm)] lg:rounded-none lg:border-l-[3px] transition-all duration-200 ${
                  activeTab === industry.id
                    ? "bg-[var(--accent-light)] lg:border-l-[var(--accent)] text-[var(--accent)]"
                    : "bg-[var(--bg-secondary)] lg:bg-transparent lg:border-l-transparent hover:bg-[var(--bg-secondary)] hover:lg:border-l-[var(--border-medium)]"
                }`}
              >
                <span className={`font-sans text-[0.9rem] font-semibold ${activeTab === industry.id ? "text-[var(--accent)]" : "text-[var(--text-body)]"}`}>
                  {industry.name}
                </span>
                <span className="block font-sans text-[0.75rem] text-[var(--text-muted)] mt-0.5">
                  {industry.projects} Projects
                </span>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="relative flex flex-col gap-6 lg:gap-8">
            {/* Dynamic Industry Image Header */}
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--bg-tertiary)] shadow-[var(--shadow-card)] group cursor-pointer">
              <Image 
                key={activeIndustry.id} 
                src={activeIndustry.image} 
                alt={`${activeIndustry.title} LED display installations`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={1200}
                height={514}
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 hidden md:flex items-center gap-3">
                 <activeIndustry.icon className="w-8 h-8 text-white stroke-[1.5]" aria-hidden="true" />
                 <h3 className="font-serif text-[1.8rem] lg:text-[2.2rem] font-bold text-white leading-none shadow-sm">{activeIndustry.title}</h3>
              </div>
            </div>

            {/* Text Content */}
            <div className="relative md:px-2">
              <div className="md:hidden flex items-center gap-3 mb-4">
                 <activeIndustry.icon className="w-7 h-7 text-[var(--accent)] stroke-[1.5]" aria-hidden="true" />
                 <h3 className="font-sans text-[1.5rem] font-bold text-[var(--text-primary)] leading-tight">{activeIndustry.title}</h3>
              </div>
              
              <p className="font-sans text-[1rem] leading-[1.8] text-[var(--text-body)] mb-6">
                {activeIndustry.description}
              </p>
              
              <div className="bg-white p-5 lg:p-6 bg-opacity-90 rounded-[var(--radius-md)] border border-[var(--border-light)] mb-8 shadow-sm">
                <p className="font-sans text-[0.95rem] leading-[1.7] text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)] block mb-1.5 font-semibold">Key Clients</strong> 
                  {activeIndustry.clients}
                </p>
              </div>
              
              {/* Use cases */}
              {activeIndustry.useCases && activeIndustry.useCases.length > 0 && (
                <div className="mb-8">
                  <p className="font-sans text-[0.75rem] font-bold text-[var(--text-muted)] tracking-[0.1em] uppercase mb-3 text-left">Common Deployments</p>
                  <div className="flex flex-wrap gap-2">
                    {activeIndustry.useCases.map((useCase) => (
                      <span 
                        key={useCase}
                        className="font-sans text-[0.82rem] font-medium px-4 py-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-medium)] rounded-[var(--radius-full)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--accent)] text-white font-sans text-[0.95rem] font-semibold rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] transition-all shadow-[var(--shadow-sm)] group w-full md:w-auto"
                >
                  View Related Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
