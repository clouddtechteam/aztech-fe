import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { StatsStrip } from "@/components/sections/stats-strip"
import { ClientMarquee } from "@/components/sections/client-marquee"
import { AboutSection } from "@/components/sections/about"
import { ProductsSection } from "@/components/sections/products"
import { SolutionsSection } from "@/components/sections/solutions"
import { WhyChooseSection } from "@/components/sections/why-choose"
import { PortfolioSection } from "@/components/sections/portfolio"
import { ServicesSection } from "@/components/sections/services"
import { ProcessSection } from "@/components/sections/process"
import { BlogSection } from "@/components/sections/blog"
import { ContactSection } from "@/components/sections/contact"
import { FAQSection } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  return (
    <main id="main" role="main" className="min-h-screen bg-[var(--bg-primary)]">
      <Navigation />
      <HeroSection />
      <StatsStrip />
      <ClientMarquee />
      <AboutSection />
      <ProductsSection />
      <SolutionsSection />
      <WhyChooseSection />
      <PortfolioSection />
      <ServicesSection />
      <ProcessSection />
      <BlogSection />
      <ContactSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
