import { ArrowRight } from "lucide-react"
import { categories } from "@/lib/product-data"

export function ProductsDropdown() {
  return (
    <div className="px-[var(--section-pad-x)] py-8">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2.5">
                {category.subcategories.map((sub) => (
                  <li key={sub.id}>
                    <a
                      href={`/?category=${category.id}&subcategory=${sub.id}#products`}
                      className="font-sans text-[0.875rem] text-[var(--text-body)] hover:text-[var(--accent)] transition-colors"
                    >
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Featured card */}
        <div className="mt-8 p-5 bg-[var(--accent-light)] rounded-[var(--radius-md)] flex items-center justify-between">
          <p className="font-sans text-[0.9rem] text-[var(--text-body)]">
            Need help choosing? Our experts will recommend the right screen for your space.
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 font-sans text-[0.875rem] font-medium text-[var(--accent)] hover:underline whitespace-nowrap"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
