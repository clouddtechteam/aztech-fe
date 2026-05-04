import { ArrowRight } from "lucide-react"

const productCategories = [
  {
    title: "Indoor",
    products: [
      { name: "HD LED Display", href: "#products" },
      { name: "Indoor LED Display", href: "#products" },
      { name: "Front Service LED Display", href: "#products" },
      { name: "Die-Cast LED Display", href: "#products" },
      { name: "LCD Video Wall", href: "#products" },
      { name: "Interactive LCD Display", href: "#products" },
    ],
  },
  {
    title: "Outdoor",
    products: [
      { name: "Outdoor DIP LED Display", href: "#products" },
      { name: "Outdoor SMD LED Display", href: "#products" },
      { name: "Perimeter LED Display", href: "#products" },
      { name: "Curve LED Display", href: "#products" },
      { name: "Large Format Outdoor", href: "#products" },
    ],
  },
  {
    title: "Specialty",
    products: [
      { name: "Transparent Glass LED", href: "#products" },
      { name: "Curtain / Mesh LED Display", href: "#products" },
      { name: "Floor LED Display", href: "#products" },
      { name: "Poster LED Display", href: "#products" },
      { name: "Spherical LED Display", href: "#products" },
      { name: "Creative / Custom Shape LED", href: "#products" },
    ],
  },
  {
    title: "Niche",
    products: [
      { name: "Gas Price LED Display", href: "#products" },
      { name: "Taxi Rooftop LED Display", href: "#products" },
      { name: "Traffic LED Display", href: "#products" },
      { name: "Time / Temperature Display", href: "#products" },
      { name: "Rental & Portable LED", href: "#products" },
    ],
  },
]

export function ProductsDropdown() {
  return (
    <div className="px-[var(--section-pad-x)] py-8">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {productCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.products.map((product) => (
                  <li key={product.name}>
                    <a
                      href={product.href}
                      className="font-sans text-[0.875rem] text-[var(--text-body)] hover:text-[var(--accent)] transition-colors"
                    >
                      {product.name}
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
