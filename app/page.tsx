"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import Comments from "@/components/Comments";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const designs = [
    {
      id: "soft-artistic",
      title: "Soft Artistic",
      description: "",
      color: "from-cyan-50 to-blue-50",
      accentColor: "text-cyan-600",
      previewText: "Soft",
    },
    {
      id: "bold-typography",
      title: "Bold Typography",
      description: "",
      color: "from-slate-50 to-white",
      accentColor: "text-slate-800",
      previewText: "Bold",
    },
    {
      id: "gallery-focus",
      title: "Gallery Focus",
      description: "",
      color: "from-green-50 to-emerald-50",
      accentColor: "text-green-700",
      previewText: "Gallery",
    },
    {
      id: "contemporary-professional",
      title: "Contemporary Professional",
      description: "",
      color: "from-indigo-50 to-teal-50",
      accentColor: "text-indigo-600",
      previewText: "Modern",
    },
    {
      id: "architectural-grid",
      title: "Architectural Grid",
      description: "",
      color: "from-gray-50 to-white",
      accentColor: "text-black",
      previewText: "Grid",
    },
    {
      id: "immersive-scroll",
      title: "Immersive Scroll",
      description: "",
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
            Site Variations
          </h1>
          {/* <div className="flex items-center gap-6">
            <Link
              href="/style-guide"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Style Guide
            </Link>
            <p className="text-sm text-slate-400">Design Variations Gallery</p>
          </div> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-light tracking-tight mb-6 max-w-2xl mx-auto"></h2>
      </section>

      {/* Design Variations List */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col gap-16">
          {designs.map((design) => (
            <div
              key={design.id}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Comments */}
              <div className="md:col-span-4 lg:col-span-3 bg-white rounded-lg p-4 border border-slate-100 shadow-sm h-full">
                <Comments mode="side-panel" pageId={design.id} />
              </div>

              {/* Right Column: Design Card */}
              <div className="md:col-span-8 lg:col-span-9">
                <Link
                  href={`/${design.id}`}
                  className="group cursor-pointer block"
                  onMouseEnter={() => setHoveredCard(design.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`relative h-96 rounded-lg overflow-hidden mb-4 bg-green-100 transition-all duration-500 border border-slate-100 flex items-center justify-center group-hover:shadow-md`}
                  >
                    <span
                      className={`text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-500 uppercase tracking-widest ${
                        design.id === "immersive-scroll"
                          ? "text-black"
                          : "text-slate-900"
                      }`}
                    >
                      {design.previewText}
                    </span>
                  </div>
                  <h3
                    className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${design.accentColor}`}
                  >
                    {design.title}
                  </h3>
                  <p className="text-slate-900 text-base leading-relaxed">
                    {design.description}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Style Guide Promo */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Swatches</h2>

          <Link
            href="/style-guide"
            className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors"
          >
            View Style Guide
          </Link>
        </div>
      </section>


    </div>
  );
}
