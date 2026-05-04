import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Aztech LED | #1 LED Screen Supplier in India | Indoor & Outdoor Displays",
  description: "Aztech LED Screens — India’s premier LED screen supplier backed by 20+ years of Dubai excellence. Indoor LED displays, outdoor billboards, transparent LED & video walls. Serving all of India. Get a free quote today.",
  keywords: "LED screen India, LED display supplier India, outdoor LED billboard India, indoor LED screen India, video wall India, transparent LED display India, LED screen installation India, digital signage India, LED screen price India, P2 LED screen India",
  authors: [{ name: "Aztech LED Screens Private Limited" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: "website",
    url: "https://aztechledscreens.com/",
    title: "Aztech LED | #1 LED Screen Supplier in India",
    description: "India’s most trusted LED display company, backed by 20+ years of Dubai excellence. Indoor, outdoor, transparent LED screens & video walls. Serving all of India.",
    siteName: "Aztech LED Screens Private Limited",
    locale: "en_IN",
    images: [
      {
        url: "https://aztechledscreens.com/images/hero_led_wall_1774782256673.webp",
        width: 1200,
        height: 800,
        alt: "Large LED video wall display in a modern Dubai commercial space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aztech LED | #1 LED Screen Supplier in India",
    description: "India’s most trusted LED display company, backed by 20+ years of Dubai excellence. Indoor, outdoor & specialty LED screens. 500+ clients.",
    images: ["https://aztechledscreens.com/images/hero_led_wall_1774782256673.webp"],
  },
  alternates: {
    canonical: "https://aztechledscreens.com/",
  },
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Ernakulam, Kerala, India',
    'geo.position': '10.0501;76.3108',
    'ICBM': '10.0501, 76.3108',
    'http-equiv-Content-Language': 'en',
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfairDisplay.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Ernakulam, Kerala, India" />
        <meta name="geo.position" content="10.0501;76.3108" />
        <meta name="ICBM" content="10.0501, 76.3108" />
        <meta httpEquiv="Content-Language" content="en" />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aztech LED Screens Private Limited",
              "image": "https://aztechledscreens.com/images/hero_led_wall_1774782256673.webp",
              "@id": "https://aztechledscreens.com/",
              "url": "https://aztechledscreens.com/",
              "telephone": "+91 73567 80866",
              "priceRange": "₹50,000 - ₹10,00,000+",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "H.No.21, Kuttiyil House, Sundaragiri Road, Kalamassery",
                "addressLocality": "Ernakulam",
                "addressRegion": "Kerala",
                "postalCode": "683104",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.0501,
                "longitude": 76.3108
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [],
              "description": "Aztech LED Screens Private Limited is India’s premier LED screen supplier backed by 20+ years of Dubai excellence. We supply indoor displays, outdoor billboards, transparent LED, video walls and specialty screens across India.",
              "areaServed": ["Mumbai", "Delhi", "Bangalore", "Kochi", "Chennai", "Hyderabad", "India"],
              "knowsAbout": ["LED Screen", "Digital Signage", "Outdoor Billboard", "Video Wall", "Indoor LED Display", "Transparent LED", "Architectural Lighting"]
            })
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Aztech LED",
              "url": "https://aztechledscreens.com/",
              "description": "India’s #1 LED screen supplier. Indoor, outdoor, specialty LED displays and video walls.",
              "publisher": {
                "@type": "Organization",
                "name": "Aztech LED Screens Private Limited",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://aztechledscreens.com/icon.svg",
                  "width": 512,
                  "height": 512
                }
              }
            })
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aztechledscreens.com/" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://aztechledscreens.com/#products" },
                { "@type": "ListItem", "position": 3, "name": "Solutions", "item": "https://aztechledscreens.com/#solutions" },
                { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://aztechledscreens.com/#projects" },
                { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://aztechledscreens.com/#contact" }
              ]
            })
          }}
        />
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the price of an LED screen in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LED screen prices in India vary based on size, pixel pitch and type. Indoor LED screens start from ₹50,000, while large outdoor billboard displays range from ₹2,00,000 to ₹10,00,000+. Contact Aztech LED for a free custom quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Aztech LED supply outdoor LED screens in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Aztech LED supplies weatherproof outdoor DIP and SMD LED displays rated up to 5000 nits, suitable for billboards, building facades, and roadside signage across India."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is pixel pitch and which one should I choose?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pixel pitch is the distance in millimetres between LED clusters. A smaller number (e.g. P1.2) means higher resolution suitable for close viewing indoors. A larger number (e.g. P6 or P10) is ideal for outdoor billboards viewed from a distance. Aztech stocks P1.2 to P10."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Aztech LED provide installation services in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Aztech LED has a full in-house installation team that handles site survey, structural mounting, cable routing, screen assembly, controller configuration and final commissioning across India. No subcontractors are used."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer maintenance contracts for LED screens?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Aztech LED offers Annual Maintenance Contracts (AMC) covering preventive maintenance, emergency callouts, spare parts supply, remote monitoring and firmware updates with a 24-hour response SLA."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
