"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Monitor, Sun, Layers, Car, ArrowRight } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { ProductModal } from "@/components/ui/product-modal"
import { productDetails, categories } from "@/lib/product-data"



import { Suspense } from "react"

function ProductsSectionInner() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" })
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || categories[0].id
  const initialSubcategory = searchParams.get("subcategory") || categories[0].subcategories[0].id

  const [activeTab, setActiveTab] = useState(initialCategory)
  const [activeSubTab, setActiveSubTab] = useState(initialSubcategory)
  const [currentPage, setCurrentPage] = useState(1)

  const [selectedProduct, setSelectedProduct] = useState<{name: string, subtitle: string, image: string} | null>(null)

  // Update tabs if URL search params change
  useEffect(() => {
    const category = searchParams.get("category")
    const subcategory = searchParams.get("subcategory")
    if (category && categories.some(c => c.id === category)) {
      setActiveTab(category)
      const targetCat = categories.find(c => c.id === category)!
      if (subcategory && targetCat.subcategories.some(s => s.id === subcategory)) {
        setActiveSubTab(subcategory)
      } else {
        setActiveSubTab(targetCat.subcategories[0].id)
      }
      setCurrentPage(1)
    }
  }, [searchParams])

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0]
  const activeSubcategory = activeCategory.subcategories.find(s => s.id === activeSubTab) || activeCategory.subcategories[0]



  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(activeSubcategory.products.length / itemsPerPage));
  const paginatedProducts = activeSubcategory.products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="bg-white relative overflow-hidden min-h-[100svh] flex flex-col justify-center py-12 lg:py-0 scroll-mt-24"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-pad-x)] relative z-10 w-full">
        
        {/* Massive Typography Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 lg:mb-16"
        >
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.25em] text-[var(--accent)] uppercase mb-4">
            Our Technologies
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-medium text-[var(--text-primary)] leading-[1.05] tracking-tight max-w-4xl">
            Engineered to <span className="text-[var(--text-muted)] italic">captivate.</span>
          </h2>
        </motion.div>

        {/* Interactive Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left: Category Tabs */}
          <div className="lg:w-[40%] flex flex-col w-full">
            {categories.map((category, idx) => {
              const isActive = activeTab === category.id
              return (
                <div key={category.id} className="border-t border-[var(--border-light)] last:border-b">
                  <button
                    onClick={() => {
                      setActiveTab(category.id)
                      setActiveSubTab(category.subcategories[0].id)
                      setCurrentPage(1)
                    }}
                    className="w-full text-left py-5 lg:py-6 group"
                  >
                    <div className="flex items-start gap-4 lg:gap-6">
                      <span className={`
                        font-sans text-xs font-bold tracking-widest mt-1.5 transition-colors duration-500
                        ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)] opacity-50 group-hover:text-[var(--text-secondary)]'}
                      `}>
                        0{idx + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className={`
                          font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-tight transition-all duration-500
                          ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)] opacity-70 group-hover:text-[var(--text-secondary)]'}
                        `}>
                          {category.name}
                        </h3>
                        
                        {/* Expandable Content */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 pb-1">
                                <p className="font-sans text-[0.9rem] text-[var(--text-secondary)] leading-relaxed max-w-md">
                                  {category.description}
                                </p>
                                <div className="mt-5">
                                  <a 
                                    href="#contact" 
                                    className="inline-flex items-center gap-2 font-sans text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                  >
                                    <span className="w-6 h-[1px] bg-current" />
                                    Explore Specs
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                </div>
              )
            })}
          </div>

          {/* Right: Subcategory Tabs & Gallery */}
          <div className="lg:w-[60%] w-full flex flex-col gap-6 mt-4 lg:mt-0">
            
            {/* Subcategory Navigation */}
            {activeCategory.subcategories.length > 1 && (
              <div className="flex flex-wrap gap-2 lg:gap-4 mb-2">
                {activeCategory.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setActiveSubTab(sub.id)
                      setCurrentPage(1)
                    }}
                    className={`
                      px-4 py-2 rounded-full font-sans text-[0.8rem] tracking-wide transition-all duration-300 border font-medium
                      ${activeSubTab === sub.id 
                        ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-[0_0_15px_rgba(28,74,151,0.3)]' 
                        : 'bg-white shadow-sm text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--border-medium)] hover:text-[var(--text-primary)]'}
                    `}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}

            {/* Gallery */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSubTab}
                initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(2px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-4 lg:gap-6"
              >
                {paginatedProducts.map((prod, idx) => (
                  <div 
                    key={`${prod.name}-${idx}`} 
                    className="group flex flex-col gap-3 cursor-pointer"
                    onClick={() => setSelectedProduct({ name: prod.name, subtitle: prod.subtitle || "", image: prod.image })}
                  >
                    <div className="relative aspect-video rounded-[16px] lg:rounded-[20px] overflow-hidden bg-white shadow-sm border border-[var(--border-light)] shadow-2xl flex items-center justify-center">
                      <Image 
                        src={prod.image}
                        alt={prod.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                        width={600} 
                        height={337}
                        priority={idx < 4}
                      />
                      {/* Elegant dark gradient overlay to frame the image */}
                      
                    </div>
                    
                    <div className="flex items-start justify-between px-1">
                       <div className="flex-1 pr-2">
                         <h4 className="font-sans text-[0.95rem] font-medium text-[var(--text-primary)] tracking-wide">
                           {prod.name}
                         </h4>
                         {/* @ts-ignore */}
                         {prod.subtitle && (
                           <p className="font-sans text-[0.65rem] text-[var(--text-secondary)] mt-1.5 uppercase tracking-widest leading-snug">
                             {/* @ts-ignore */}
                             {prod.subtitle}
                           </p>
                         )}
                       </div>
                       <div className="w-6 h-6 rounded-full border border-[var(--border-light)] flex items-center justify-center shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1] mt-0.5">
                         <ArrowRight className="w-3 h-3 text-[var(--text-primary)]" />
                       </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 rounded-full border border-[var(--border-light)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                      currentPage === i + 1 
                        ? 'bg-[var(--accent)] text-[var(--text-primary)]' 
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 rounded-full border border-[var(--border-light)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct ? (productDetails[selectedProduct.name] || null) : null}
        fallbackName={selectedProduct?.name}
        fallbackSubtitle={selectedProduct?.subtitle}
        imageSrc={selectedProduct?.image || ""}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}

export function ProductsSection() {
  return (
    <Suspense fallback={<div className="min-h-[100svh] bg-white flex items-center justify-center">Loading products...</div>}>
      <ProductsSectionInner />
    </Suspense>
  )
}
