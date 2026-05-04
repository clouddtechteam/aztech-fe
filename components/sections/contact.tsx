"use client"

import { useRef, useState, FormEvent } from "react"
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const serviceOptions = [
  "Select a service...",
  "Indoor LED Screen",
  "Outdoor LED Screen",
  "Rental / Event Screen",
  "Transparent LED Screen",
  "LCD Video Wall",
  "Custom LED Display",
  "Exterior / Architectural Lighting",
  "Audio-Visual System",
  "Gas Price / Taxi / Traffic LED",
  "After-Sales & Maintenance",
  "Other / Not Sure",
]

const locationOptions = [
  "Select location...",
  "Mumbai",
  "Delhi / NCR",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Kochi",
  "Other (within India)",
  "Outside India",
]

const budgetOptions = [
  "Prefer not to say",
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹10,00,000",
  "₹10,00,000+",
]

const sourceOptions = [
  "How did you hear about us?",
  "Google Search",
  "Referral",
  "Social Media",
  "Existing Client",
  "Other",
]

export function ContactSection() {
  const { ref, isVisible } = useReveal()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)

    const form = formRef.current!
    const data = {
      name:     (form.elements.namedItem('name')    as HTMLInputElement).value.trim(),
      company:  (form.elements.namedItem('company') as HTMLInputElement).value.trim(),
      email:    (form.elements.namedItem('email')   as HTMLInputElement).value.trim(),
      phone:    (form.elements.namedItem('phone')   as HTMLInputElement).value.trim(),
      service:  (form.elements.namedItem('service') as HTMLSelectElement).value,
      location: (form.elements.namedItem('location') as HTMLSelectElement).value,
      budget:   (form.elements.namedItem('budget')  as HTMLSelectElement).value,
      source:   (form.elements.namedItem('source')  as HTMLSelectElement).value,
      message:  (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    }

    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.service) {
      setErrorMsg('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    const subject = `New LED Enquiry: ${data.service} — ${data.name}${data.company ? ` (${data.company})` : ''}`
    const body = [
      `Name: ${data.name}`,
      data.company ? `Company: ${data.company}` : '',
      `Email: ${data.email}`,
      `Phone / WhatsApp: ${data.phone}`,
      `Service Required: ${data.service}`,
      data.location ? `Project Location: ${data.location}` : '',
      `Approximate Budget: ${data.budget}`,
      data.source ? `How They Heard: ${data.source}` : '',
      '',
      'Project Details / Message:',
      data.message || 'No message provided',
    ].filter(Boolean).join('\n')

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent('sales@az-tech.ae')}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank')
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`section-padding bg-[var(--bg-primary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="Contact Aztech LED Dubai — Get a Free Quote"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">GET IN TOUCH</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)] mb-4">
            Request a Free Quote
          </h2>
          <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-secondary)] max-w-[600px] mx-auto">
            Tell us about your LED screen project and we&apos;ll respond within 24 hours with a detailed proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16">
          {/* Contact Info - Left */}
          <div>
            {/* Company card */}
            <div className="bg-white p-7 rounded-[var(--radius-md)] border border-[var(--border-light)] mb-6">
              <div className="flex flex-col mb-5">
                <div className="flex items-baseline gap-0.5">
                  <span className="font-serif text-[26px] font-bold text-[var(--text-primary)]">AZTECH</span>
                  <span className="font-sans text-[14px] font-semibold text-[var(--accent)]"> LED</span>
                </div>
                <span className="font-sans text-[0.85rem] text-[var(--text-muted)]">
                  Aztech LED Screens Private Limited
                </span>
              </div>

              {/* Corporate Identity */}
              <div className="flex flex-col gap-2 mb-5 p-4 bg-[var(--bg-secondary)] rounded-[var(--radius-sm)] border border-[var(--border-light)]">
                <div className="flex items-start gap-2">
                  <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[var(--accent)] whitespace-nowrap mt-0.5">Head Office</span>
                  <span className="font-sans text-[0.82rem] text-[var(--text-body)] leading-[1.5]">
                    Aztech General Trading LLC, Dubai, UAE
                  </span>
                </div>
                <div className="h-px bg-[var(--border-light)]" />
                <div className="flex items-start gap-2">
                  <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[var(--copper)] whitespace-nowrap mt-0.5">Sister Concern</span>
                  <span className="font-sans text-[0.82rem] text-[var(--text-body)] leading-[1.5]">
                    Lamps Plus Electronics Trading LLC
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a href="https://www.google.com/maps/search/?api=1&query=10.0501,76.3108" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MapPin className="w-[18px] h-[18px] text-[var(--accent-mid)] mt-1 shrink-0" aria-hidden="true" />
                  <address className="font-sans text-[0.9rem] text-[var(--text-body)] not-italic leading-[1.6] group-hover:text-[var(--accent)] transition-colors">
                    H.No.21, Kuttiyil House, Sundaragiri Road,<br />
                    Kalamassery, Ernakulam,<br />
                    Kerala – 683104
                  </address>
                </a>
                
                <a href="tel:+917356780866" className="flex items-center gap-3 group">
                  <Phone className="w-[18px] h-[18px] text-[var(--accent-mid)] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[0.9rem] text-[var(--text-body)] group-hover:text-[var(--accent)] transition-colors">
                    +91 73567 80866
                  </span>
                </a>
                
                <a href="https://wa.me/971561425339" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-[var(--accent-mid)] shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-sans text-[0.9rem] text-[var(--text-body)] group-hover:text-[var(--accent)] transition-colors">
                    +971 56 142 5339
                  </span>
                </a>
                
                <a href="mailto:sales@az-tech.ae" className="flex items-center gap-3 group">
                  <Mail className="w-[18px] h-[18px] text-[var(--accent-mid)] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[0.9rem] text-[var(--text-body)] group-hover:text-[var(--accent)] transition-colors">
                    sales@az-tech.ae
                  </span>
                </a>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-[18px] h-[18px] text-[var(--accent-mid)] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[0.9rem] text-[var(--text-body)]">
                    Mon–Sat: 8:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </div>
            
            {/* Map embed */}
            <div className="aspect-[4/3] rounded-[var(--radius-md)] border border-[var(--border-light)] overflow-hidden mb-6">
              <iframe
                title="Aztech LED Screens office location in Kalamassery, Ernakulam, Kerala"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d76.3108!3d10.0501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d3d27a98b9f%3A0x6b7f9b8c4e2d1a5c!2sKalamassery%2C%20Ernakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1746120000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* WhatsApp CTA */}
            <div className="bg-[var(--success-bg)] border border-[rgba(26,107,60,0.2)] rounded-[var(--radius-md)] p-5">
              <h3 className="font-sans text-[0.9rem] font-semibold text-[var(--success)] mb-1">
                Prefer WhatsApp?
              </h3>
              <p className="font-sans text-[0.85rem] text-[var(--text-body)] mb-4">
                Chat with our sales team instantly. Fast response guaranteed.
              </p>
              <a 
                href="https://wa.me/971561425339?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20LED%20screens."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-sans text-[0.85rem] font-semibold px-5 py-3 rounded-[var(--radius-sm)] hover:bg-[#1da851] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form - Right */}
          <div className="bg-white p-8 lg:p-10 rounded-[var(--radius-lg)] border border-[var(--border-light)]">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--success-bg)] flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[var(--success)]" />
                </div>
                <h3 className="font-sans text-[1.2rem] font-semibold text-[var(--text-primary)] mb-2">
                  Gmail Opened!
                </h3>
                <p className="font-sans text-[1rem] text-[var(--text-body)] mb-6">
                  A Gmail compose window has opened with your enquiry pre-filled. Just hit <strong>Send</strong> and our team at <strong>sales@az-tech.ae</strong> will get back to you within 24 hours.
                </p>
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-1 font-sans text-[0.9rem] font-medium text-[var(--accent)] hover:underline"
                >
                  In the meantime, explore our projects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <h3 className="font-sans text-[1.2rem] font-semibold text-[var(--text-primary)] mb-6">
                  Send Us a Project Enquiry
                </h3>
                
                <div className="grid gap-5">
                  {/* Name & Company */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-sans text-[0.82rem] font-medium text-[var(--text-body)] mb-1.5">
                        Full Name <span className="text-[var(--copper)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 font-sans text-[0.9rem] border border-[var(--border-medium)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block font-sans text-[0.82rem] font-medium text-[var(--text-body)] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 font-sans text-[0.9rem] border border-[var(--border-medium)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block font-sans text-[0.82rem] font-medium text-[var(--text-body)] mb-1.5">
                        Email Address <span className="text-[var(--copper)]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 font-sans text-[0.9rem] border border-[var(--border-medium)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-sans text-[0.82rem] font-medium text-[var(--text-body)] mb-1.5">
                        Phone / WhatsApp <span className="text-[var(--copper)]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 font-sans text-[0.9rem] border border-[var(--border-medium)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  {/* Service & Location */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block font-sans text-[0.82rem] font-medium text-[var(--text-body)] mb-1.5">
                        Service Required <span className="text-[var(--copper)]">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 font-sans text-[0.9rem] border border-[var(--border-medium)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] focus:outline-none transition-colors bg-white"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option} value={option === "Select a service..." ? "" : option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block font-sans text-[0.82rem] font-medium text-[var(--text-body)] mb-1.5">
                        Project Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        className="w-full px-4 py-3 font-sans text-[0.9rem] border border-[var(--border-medium)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] focus:outline-none transition-colors bg-white"
                      >
                        {locationOptions.map((option) => (
                          <option key={option} value={option === "Select district..." ? "" : option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Budget & Source */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className="block font-sans text-[0.82rem] font-medium text-[var(--text-body)] mb-1.5">
                        Approximate Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-3 font-sans text-[0.9rem] border border-[var(--border-medium)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] focus:outline-none transition-colors bg-white"
                      >
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="source" className="block font-sans text-[0.82rem] font-medium text-[var(--text-body)] mb-1.5">
                        How did you hear about us?
                      </label>
                      <select
                        id="source"
                        name="source"
                        className="w-full px-4 py-3 font-sans text-[0.9rem] border border-[var(--border-medium)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] focus:outline-none transition-colors bg-white"
                      >
                        {sourceOptions.map((option) => (
                          <option key={option} value={option === "How did you hear about us?" ? "" : option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-sans text-[0.82rem] font-medium text-[var(--text-body)] mb-1.5">
                      Project Details / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project — screen size, location, viewing distance, timeline..."
                      className="w-full px-4 py-3 font-sans text-[0.9rem] border border-[var(--border-medium)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  
                  {/* Error message */}
                  {errorMsg && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-[var(--radius-sm)] px-4 py-3">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <p className="font-sans text-[0.85rem] leading-[1.5]">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[var(--accent)] text-white font-sans text-[0.9rem] font-semibold tracking-[0.04em] rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-[1px] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending…" : "Send My Enquiry"}
                  </button>
                  
                  <p className="font-sans text-[0.78rem] text-[var(--text-muted)] text-center">
                    We respond within 24 hours. Your information is private and never shared.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
