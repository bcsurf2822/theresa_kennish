"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const designs = [
    {
      id: "classic-minimal",
      title: "Classic Minimal",
      description: "Traditional grid layout with lots of white space and subtle blue accents",
      color: "from-blue-50 to-white",
      accentColor: "text-blue-600",
    },
    {
      id: "modern-geometric",
      title: "Modern Geometric",
      description: "Clean geometric shapes with a modern green color scheme and asymmetrical elements",
      color: "from-emerald-50 to-teal-50",
      accentColor: "text-emerald-600",
    },
    {
      id: "soft-artistic",
      title: "Soft Artistic",
      description: "Organic shapes and watercolor-inspired backgrounds with soft gradients",
      color: "from-cyan-50 to-blue-50",
      accentColor: "text-cyan-600",
    },
    {
      id: "bold-typography",
      title: "Bold Typography",
      description: "Strong typographic hierarchy with minimal graphics and deep blue tones",
      color: "from-slate-50 to-white",
      accentColor: "text-slate-800",
    },
    {
      id: "gallery-focus",
      title: "Gallery Focus",
      description: "Image-centric design with subtle green undertones and photography showcase style",
      color: "from-green-50 to-emerald-50",
      accentColor: "text-green-700",
    },
    {
      id: "contemporary-professional",
      title: "Contemporary Professional",
      description: "Balanced layout with sophisticated color mixing of blues and greens",
      color: "from-indigo-50 to-teal-50",
      accentColor: "text-indigo-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Artist Portfolio</h1>
          <p className="text-sm text-slate-500">Design Variations Gallery</p>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-light tracking-tight mb-6">Six Interpretations of Modern Design</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Explore six distinct minimalist approaches to artist portfolio design, each offering a unique visual aesthetic
          while maintaining clean, professional structure and elegant simplicity.
        </p>
      </section>

      {/* Design Variations Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <Link
              key={design.id}
              href={`/${design.id}`}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(design.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="relative h-80 rounded-lg overflow-hidden mb-4 bg-gradient-to-br transition-all duration-500"
                style={
                  {
                    backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    "--tw-gradient-from": "#f8fafc",
                    "--tw-gradient-to": "#f1f5f9",
                  } as React.CSSProperties
                }
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${design.color} transition-all duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-slate-900/5">
                  <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${design.accentColor}`}>
                {design.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{design.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-sm text-slate-500">
          <p>A collection of minimalist artist portfolio designs showcasing diverse aesthetic approaches</p>
        </div>
      </footer>
    </div>
  )
}
