"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { ProductsDropdown } from "./products-dropdown"
import { SolutionsDropdown } from "./solutions-dropdown"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products", hasDropdown: true, dropdownType: "products" },
  { href: "/#solutions", label: "Solutions", hasDropdown: true, dropdownType: "solutions" },
  { href: "/#projects", label: "Projects" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
]

export function MainNav() {
  const pathname = usePathname()
  const isDarkPage = pathname?.startsWith("/blog")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleDropdownEnter = (type: string) => {
    setActiveDropdown(type)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "top-0 bg-[rgba(250,250,248,0.96)] backdrop-blur-[16px] shadow-[var(--shadow-nav)]" 
            : "top-9 bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="h-[84px] md:h-[92px] px-[var(--section-pad-x)] flex items-center justify-between max-w-[1920px] mx-auto">
          {/* Logo */}
          <a href="/" className="inline-flex items-center justify-center h-full hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-md">
              <Image
                src="/images/1.jpg__2_-removebg-preview.png"
                alt="Aztech LED Logo"
                width={80}
                height={80}
                priority
                className="w-full h-full object-contain scale-125"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.dropdownType!)}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 font-sans text-[0.875rem] font-medium transition-colors duration-200 relative group py-2 ${(!isScrolled && isDarkPage) ? 'text-white/80 hover:text-white' : 'text-[var(--text-body)] hover:text-[var(--accent)]'}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.dropdownType ? "rotate-180" : ""}`} />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-200 group-hover:w-full" />
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center px-[22px] py-[10px] bg-[var(--accent)] text-white font-sans text-[0.85rem] font-semibold tracking-[0.04em] rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(27,58,92,0.3)] transition-all duration-200"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${(!isScrolled && isDarkPage) ? 'text-white' : 'text-[var(--text-primary)]'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${(!isScrolled && isDarkPage) ? 'text-white' : 'text-[var(--text-primary)]'}`} />
            )}
          </button>
        </div>

        {/* Mega Dropdowns */}
        {activeDropdown === "products" && (
          <div 
            className="hidden lg:block absolute left-0 right-0 bg-white border-t-2 border-[var(--accent)] shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
            onMouseEnter={() => handleDropdownEnter("products")}
            onMouseLeave={handleDropdownLeave}
          >
            <ProductsDropdown />
          </div>
        )}
        
        {activeDropdown === "solutions" && (
          <div 
            className="hidden lg:block absolute left-0 right-0 bg-white border-t-2 border-[var(--accent)] shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
            onMouseEnter={() => handleDropdownEnter("solutions")}
            onMouseLeave={handleDropdownLeave}
          >
            <SolutionsDropdown />
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-[rgba(17,17,17,0.5)] z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-[var(--bg-primary)] z-[70] lg:hidden overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <X className="w-6 h-6 text-[var(--text-primary)]" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-sans text-[1.5rem] font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center justify-center px-6 py-4 bg-[var(--accent)] text-white font-sans text-[1rem] font-semibold rounded-[var(--radius-sm)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Free Quote
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
