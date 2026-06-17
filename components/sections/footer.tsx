import Image from "next/image"
import { Phone, Linkedin, Instagram, Facebook } from "lucide-react"

const products = [
  { label: "HD LED Display", href: "/#product-hd-led-display" },
  { label: "Indoor LED Display", href: "/#product-indoor-led-display" },
  { label: "Outdoor DIP LED", href: "/#product-outdoor-dip-led-display" },
  { label: "Outdoor SMD LED", href: "/#product-outdoor-smd-led-display" },
  { label: "Transparent Glass LED", href: "/#product-transparent-glass-led" },
  { label: "Poster LED Display", href: "/#product-poster-led-display" },
  { label: "Floor LED Display", href: "/#product-floor-led-display" },
  { label: "Spherical LED Display", href: "/#product-spherical-led-display" },
]

const solutions = [
  { label: "Retail & Malls", href: "/#solutions-retail" },
  { label: "Corporate & Office", href: "/#solutions-corporate" },
  { label: "Hospitality & Hotels", href: "/#solutions-hospitality" },
  { label: "Healthcare", href: "/#solutions-healthcare" },
  { label: "Education", href: "/#solutions-education" },
  { label: "Government", href: "/#solutions-government" },
  { label: "Events & Exhibitions", href: "/#solutions-events" },
  { label: "Sports & Stadiums", href: "/#solutions-sports" },
]

const company = [
  { label: "About Aztech", href: "/#about" },
  { label: "Our Projects", href: "/#projects" },
  { label: "Our Services", href: "/#services" },
  { label: "Blog & Resources", href: "/#blog" },
  { label: "Contact Us", href: "/#contact" },
]

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/aztechledscreensupplier/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ledscreendxb?igsh=NHQ0aDFuc3hwZmd4", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/1Ayj5XVxF5/", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] pt-20 border-t border-[var(--border-light)]">
      <div className="px-[var(--section-pad-x)]">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 lg:pb-16">
            {/* Brand Column */}
            <div className="lg:col-span-3 md:col-span-2">
              <div className="flex flex-col mb-5">
                <a href="/" className="inline-flex items-center mb-4 hover:opacity-80 transition-opacity w-fit">
                  <Image
                    src="/images/1.jpg__2_-removebg-preview.png"
                    alt="Aztech LED Logo"
                    width={128}
                    height={128}
                    className="w-32 h-32 object-contain"
                  />
                </a>
              </div>
              
              <p className="font-sans text-[0.88rem] leading-[1.7] text-[var(--text-secondary)] mb-6 max-w-sm">
                India&apos;s LED screen specialists, backed by 20+ years of Dubai excellence.
                We design, supply, install and service every project — across all major cities in India.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-sm"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Products Column */}
            <div className="lg:col-span-2">
              <h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-light)]">
                Products
              </h3>
              <ul className="flex flex-col gap-2.5">
                {products.map((product) => (
                  <li key={product.label}>
                    <a href={product.href} className="font-sans text-[0.85rem] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                      {product.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/#products" className="font-sans text-[0.85rem] font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mt-2 inline-block">
                    View All Products →
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="lg:col-span-2">
              <h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-light)]">
                Solutions
              </h3>
              <ul className="flex flex-col gap-2.5">
                {solutions.map((solution) => (
                  <li key={solution.label}>
                    <a href={solution.href} className="font-sans text-[0.85rem] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                      {solution.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-light)]">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5">
                {company.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="font-sans text-[0.85rem] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3">
              <h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-light)]">
                Contact Us
              </h3>
              <address className="not-italic font-sans text-[0.82rem] text-[var(--text-secondary)] leading-[1.7] mb-4">
                CHAMMANY COMPLEX, SHOP NO 65/869,<br />
                SEBASTIAN ROAD, KALOOR,<br />
                KOCHIN 682017
              </address>
              <address className="not-italic font-sans text-[0.82rem] text-[var(--text-secondary)] leading-[1.7] mb-4">
                AZTECH GENERAL TRADING LLC<br />
                Head Office – Karama, Dubai<br />
                Al Nishwan Building, Near ADCB Metro Station<br />
                P.O. Box 239101, UAE<br />
                Phone: <a href="tel:+97143574004" className="underline">043574004</a>
              </address>
              <address className="not-italic font-sans text-[0.82rem] text-[var(--text-secondary)] leading-[1.7] mb-4">
                AZTECH GENERAL TRADING LLC<br />
                Branch: Al Quoz Industrial Area 3<br />
                NRL Warehouse 55, Dubai, UAE
              </address>
              <address className="not-italic font-sans text-[0.82rem] text-[var(--text-secondary)] leading-[1.7] mb-4">
                LAMPS PLUS ELECTRONICS TRADING LLC<br />
                Sister Concern – Dragon Mart 1<br />
                AAD01, Dragon Mart 1<br />
                International City, Dubai, UAE
              </address>
              <p className="font-sans text-[0.82rem] text-[var(--text-secondary)]">
                Mon–Sat: 8:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--bg-primary)] border-t border-[var(--border-light)]">
        <div className="px-[var(--section-pad-x)] py-6 pb-28 md:pb-8">
          <div className="max-w-[var(--container-max)] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col gap-1.5">
              <p className="font-sans text-[0.8rem] font-medium text-[var(--text-secondary)]">
                © 2026 Aztech LED Screens Private Limited. All Rights Reserved.
              </p>
              <p className="font-sans text-[0.75rem] text-[var(--text-secondary)]/70 hidden sm:block">
                Head Office: <span className="font-medium text-[var(--text-secondary)]">AZTECH GENERAL TRADING LLC, Dubai</span>
                <span className="mx-1.5 text-white/20">·</span>
                Sister Concern: <span className="font-medium text-[var(--text-secondary)]">LAMPS PLUS ELECTRONICS TRADING LLC</span>
              </p>
            </div>
            <div className="flex flex-col gap-1.5 lg:text-right">
              <p className="font-sans text-[0.75rem] font-medium text-[var(--text-secondary)] hidden lg:block">
                LED Screen India | Digital Signage India | Outdoor LED Displays
              </p>
              <p className="font-sans text-[0.75rem] font-medium text-[var(--text-secondary)]/70">
                Dubai Expertise · India Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
