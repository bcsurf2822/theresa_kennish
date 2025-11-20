"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const designs = [
    {
      id: "soft-artistic",
      title: "Soft Artistic",
      description:
        "Organic shapes and watercolor-inspired backgrounds with soft gradients",
      color: "from-cyan-50 to-blue-50",
      accentColor: "text-cyan-600",
      previewText: "Soft",
    },
    {
      id: "bold-typography",
      title: "Bold Typography",
      description:
        "Strong typographic hierarchy with minimal graphics and deep blue tones",
      color: "from-slate-50 to-white",
      accentColor: "text-slate-800",
      previewText: "Bold",
    },
    {
      id: "gallery-focus",
      title: "Gallery Focus",
      description:
        "Image-centric design with subtle green undertones and photography showcase style",
      color: "from-green-50 to-emerald-50",
      accentColor: "text-green-700",
      previewText: "Gallery",
    },
    {
      id: "contemporary-professional",
      title: "Contemporary Professional",
      description:
        "Balanced layout with sophisticated color mixing of blues and greens",
      color: "from-indigo-50 to-teal-50",
      accentColor: "text-indigo-600",
      previewText: "Modern",
    },
    {
      id: "architectural-grid",
      title: "Architectural Grid",
      description:
        "Structured, Swiss-style layout with visible grid lines and monochromatic palette",
      color: "from-gray-50 to-white",
      accentColor: "text-black",
      previewText: "Grid",
    },
    {
      id: "immersive-scroll",
      title: "Immersive Scroll",
      description:
        "Cinematic experience with full-screen visuals and parallax effects",
      color: "from-black to-gray-900",
      accentColor: "text-emerald-400",
      previewText: "Scroll",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">
            Artist Portfolio
          </h1>
          <div className="flex items-center gap-6">
            <Link
              href="/style-guide"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Style Guide
            </Link>
            <p className="text-sm text-slate-400">Design Variations Gallery</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-light tracking-tight mb-6">
          Six Interpretations of Modern Design
        </h2>
 
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
                className={`relative h-80 rounded-lg overflow-hidden mb-4 bg-gradient-to-br ${design.color} transition-all duration-500 border border-slate-100 flex items-center justify-center group-hover:shadow-md`}
              >
                <span
                  className={`text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-500 uppercase tracking-widest ${
                    design.id === "immersive-scroll"
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {design.previewText}
                </span>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 transition-colors duration-300 ${design.accentColor}`}
              >
                {design.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {design.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Style Guide Promo */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Design System & Style Guide
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            View the comprehensive collection of UI elements, typography
            choices, and color palettes used across all design variants.
          </p>
          <Link
            href="/style-guide"
            className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors"
          >
            View Style Guide
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-sm text-slate-500">
          <p>
            A collection of minimalist artist portfolio designs showcasing
            diverse aesthetic approaches
          </p>
        </div>
      </footer>
    </div>
  );
}
