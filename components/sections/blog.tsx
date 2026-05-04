"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

const posts = [
  {
    title: "Indoor vs Outdoor LED Screens: Which Do You Actually Need?",
    slug: "indoor-vs-outdoor-led-screens",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "Jan 2025",
    excerpt: "The choice between indoor and outdoor LED isn't just about weatherproofing. Brightness, pixel pitch, viewing distance, and content type all play a role. Here is how to decide.",
    image: "/images/blog_compare.webp"
  },
  {
    title: "Pixel Pitch Explained: Choosing the Right Resolution for Your Space",
    slug: "pixel-pitch-explained",
    category: "Technical Guide",
    readTime: "7 min read",
    date: "Dec 2024",
    excerpt: "P1.86 vs P2.5 vs P4 — what do these numbers mean and how do they affect what your audience sees? A plain-English guide for procurement managers and fit-out contractors.",
    image: "/images/blog_pixel.webp"
  },
  {
    title: "Top 5 LED Display Trends Dominating Dubai in 2025",
    slug: "led-display-trends-dubai-2025",
    category: "Industry Insight",
    readTime: "5 min read",
    date: "Feb 2025",
    excerpt: "Transparent LED, kinetic screens, and AI-driven content management are reshaping how Dubai businesses use digital displays. What's worth investing in right now?",
    image: "/images/blog_trends.webp"
  },
]

export function BlogSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      id="blog" 
      className={`section-padding bg-[var(--accent)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="LED Screen Buying Guides and Industry Insights"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow !text-white/80 mb-3 tracking-[0.2em]">LED KNOWLEDGE HUB</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-white mb-4">
            Insights & Buying Guides
          </h2>
          <p className="font-sans text-[1rem] leading-[1.75] text-white/70 max-w-[600px]">
            Practical advice on LED screen selection, installation and maintenance — written for UAE buyers.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article 
              key={post.title}
              className="bg-white/5 backdrop-blur-sm rounded-[var(--radius-md)] border border-white/10 overflow-hidden group hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Blog Image */}
              <a href={`/blog/${post.slug}`} aria-label={`Read article: ${post.title}`} tabIndex={-1}>
                <div className="relative aspect-[16/9] bg-[var(--bg-tertiary)] overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </a>
              
              <div className="p-6">
                <span className="inline-block font-sans text-[0.7rem] font-medium px-[10px] py-[3px] bg-white/10 text-white border border-white/10 rounded-[var(--radius-full)] mb-3">
                  {post.category}
                </span>
                
                <h3 className="font-sans text-[1.05rem] font-semibold text-white leading-[1.4] mb-2 line-clamp-2 transition-colors">
                  <a href={`/blog/${post.slug}`} className="hover:text-white/80 transition-colors">{post.title}</a>
                </h3>
                
                <p className="font-sans text-[0.88rem] text-white/70 leading-[1.6] line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-sans text-[0.75rem] text-white/50">
                    {post.date} · {post.readTime}
                  </span>
                  <a 
                    href={`/blog/${post.slug}`}
                    aria-label={`Read full article: ${post.title}`}
                    className="inline-flex items-center gap-1 font-sans text-[0.85rem] font-medium text-white hover:text-white/80 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/blog/indoor-vs-outdoor-led-screens"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-[1.5px] border-white/20 text-white font-sans text-[0.9rem] font-semibold rounded-[var(--radius-sm)] hover:bg-white hover:text-[var(--accent)] transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
