import Link from "next/link";

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 p-12 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Design System & Style Guide
            </h1>
            <p className="text-slate-500 text-lg">
              A collection of UI elements, typography, and colors used across
              the portfolio variants.
            </p>
          </div>
          <Link
            href="/"
            className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {/* Typography Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-slate-200">
            Typography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Soft Artistic Fonts */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Soft Artistic (Raleway)
              </h3>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 space-y-4">
                <p
                  className="text-4xl font-light"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Heading Display
                </p>
                <p
                  className="text-2xl font-normal"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Subheading Text
                </p>
                <p
                  className="text-base leading-relaxed text-slate-600"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Body text example. The quick brown fox jumps over the lazy
                  dog. Minimal and clean aesthetic with a focus on readability.
                </p>
              </div>
            </div>

            {/* Bold Typography Fonts */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Bold Typography (Playfair Display)
              </h3>
              <div className="p-8 bg-slate-900 rounded-xl shadow-sm border border-slate-800 space-y-4 text-white">
                <p
                  className="text-4xl font-bold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Heading Display
                </p>
                <p
                  className="text-2xl font-medium italic"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Subheading Text
                </p>
                <p
                  className="text-base leading-relaxed text-slate-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Body text example. The quick brown fox jumps over the lazy
                  dog. High contrast and dramatic.
                </p>
              </div>
            </div>

            {/* Gallery Focus Fonts */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Gallery Focus (Sans)
              </h3>
              <div className="p-8 bg-stone-50 rounded-xl shadow-sm border border-stone-200 space-y-4 text-stone-900">
                <p className="text-4xl font-light tracking-tight">
                  Heading Display
                </p>
                <p className="text-xs font-bold uppercase tracking-widest">
                  Subheading Text
                </p>
                <p className="text-sm leading-relaxed text-stone-600">
                  Body text example. The quick brown fox jumps over the lazy
                  dog. Neutral and gallery-like.
                </p>
              </div>
            </div>

            {/* Contemporary Professional Fonts */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Contemporary (Work Sans)
              </h3>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 space-y-4 text-slate-900">
                <p
                  className="text-4xl font-bold tracking-tighter"
                  style={{ fontFamily: "Work Sans, sans-serif" }}
                >
                  Heading Display
                </p>
                <p
                  className="text-xl font-medium text-indigo-600"
                  style={{ fontFamily: "Work Sans, sans-serif" }}
                >
                  Subheading Text
                </p>
                <p
                  className="text-base leading-relaxed text-slate-600"
                  style={{ fontFamily: "Work Sans, sans-serif" }}
                >
                  Body text example. The quick brown fox jumps over the lazy
                  dog. Modern and corporate-friendly.
                </p>
              </div>
            </div>

            {/* Architectural Grid Fonts */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Architectural Grid (Inter)
              </h3>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-black space-y-4 text-black">
                <p className="text-4xl font-bold tracking-tighter uppercase">
                  Heading Display
                </p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500">
                  Subheading Text
                </p>
                <p className="text-sm leading-relaxed font-medium">
                  Body text example. The quick brown fox jumps over the lazy
                  dog. Structured and Swiss-style.
                </p>
              </div>
            </div>

            {/* Immersive Scroll Fonts */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Immersive Scroll (Serif)
              </h3>
              <div className="p-8 bg-black rounded-xl shadow-sm border border-gray-800 space-y-4 text-white">
                <p className="text-4xl font-serif italic tracking-tight">
                  Heading Display
                </p>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                  Subheading Text
                </p>
                <p className="text-lg font-light leading-relaxed text-gray-300">
                  Body text example. The quick brown fox jumps over the lazy
                  dog. Cinematic and elegant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-slate-200">
            Color Palettes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {/* Soft Artistic */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-500">
                Soft Artistic
              </h3>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-cyan-50 flex items-center justify-center text-xs text-cyan-900 font-mono">
                  bg-cyan-50
                </div>
                <div className="h-16 rounded-lg bg-cyan-100 flex items-center justify-center text-xs text-cyan-900 font-mono">
                  bg-cyan-100
                </div>
                <div className="h-16 rounded-lg bg-cyan-900 flex items-center justify-center text-xs text-white font-mono">
                  bg-cyan-900
                </div>
              </div>
            </div>

            {/* Bold Typography */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-500">
                Bold Typography
              </h3>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-slate-900 flex items-center justify-center text-xs text-white font-mono">
                  bg-slate-900
                </div>
                <div className="h-16 rounded-lg bg-amber-500 flex items-center justify-center text-xs text-white font-mono">
                  bg-amber-500
                </div>
                <div className="h-16 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs text-slate-900 font-mono">
                  bg-white
                </div>
              </div>
            </div>

            {/* Gallery Focus */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-500">
                Gallery Focus
              </h3>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-stone-50 flex items-center justify-center text-xs text-stone-600 font-mono">
                  bg-stone-50
                </div>
                <div className="h-16 rounded-lg bg-green-700 flex items-center justify-center text-xs text-white font-mono">
                  bg-green-700
                </div>
                <div className="h-16 rounded-lg bg-stone-900 flex items-center justify-center text-xs text-white font-mono">
                  bg-stone-900
                </div>
              </div>
            </div>

            {/* Contemporary */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-500">Contemporary</h3>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-indigo-600 flex items-center justify-center text-xs text-white font-mono">
                  bg-indigo-600
                </div>
                <div className="h-16 rounded-lg bg-slate-50 flex items-center justify-center text-xs text-slate-600 font-mono">
                  bg-slate-50
                </div>
                <div className="h-16 rounded-lg bg-slate-900 flex items-center justify-center text-xs text-white font-mono">
                  bg-slate-900
                </div>
              </div>
            </div>

            {/* Architectural Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-500">
                Architectural
              </h3>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-white border border-black flex items-center justify-center text-xs text-black font-mono">
                  bg-white
                </div>
                <div className="h-16 rounded-lg bg-black flex items-center justify-center text-xs text-white font-mono">
                  bg-black
                </div>
                <div className="h-16 rounded-lg bg-blue-600 flex items-center justify-center text-xs text-white font-mono">
                  bg-blue-600
                </div>
              </div>
            </div>

            {/* Immersive Scroll */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-500">Immersive</h3>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-black flex items-center justify-center text-xs text-white font-mono">
                  bg-black
                </div>
                <div className="h-16 rounded-lg bg-emerald-400 flex items-center justify-center text-xs text-black font-mono">
                  bg-emerald-400
                </div>
                <div className="h-16 rounded-lg bg-gray-900 flex items-center justify-center text-xs text-gray-400 font-mono">
                  bg-gray-900
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-slate-200">
            Buttons & Interactions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Soft Artistic */}
            <div className="p-6 bg-white rounded-xl border border-slate-100 flex flex-col items-center justify-center gap-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Soft Artistic
              </h3>
              <button className="px-8 py-3 bg-cyan-900 text-white rounded-full hover:bg-cyan-800 transition-all hover:shadow-lg hover:scale-105">
                View Gallery
              </button>
              <button className="text-cyan-900 font-medium hover:text-cyan-700 underline decoration-cyan-200 underline-offset-4">
                Learn More
              </button>
            </div>

            {/* Bold Typography */}
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center gap-4">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                Bold Typography
              </h3>
              <button className="px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors">
                View Work
              </button>
              <button className="text-white font-serif italic text-lg hover:text-amber-400 transition-colors">
                Read Story &rarr;
              </button>
            </div>

            {/* Gallery Focus */}
            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 flex flex-col items-center justify-center gap-4">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">
                Gallery Focus
              </h3>
              <button className="px-8 py-4 border border-stone-300 text-stone-600 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">
                View Collection
              </button>
              <button className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-green-700 transition-colors">
                Contact Artist
              </button>
            </div>

            {/* Contemporary */}
            <div className="p-6 bg-white rounded-xl border border-slate-100 flex flex-col items-center justify-center gap-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Contemporary
              </h3>
              <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                View Portfolio
              </button>
              <button className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-2">
                View Details <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Architectural Grid */}
            <div className="p-6 bg-white rounded-xl border border-black flex flex-col items-center justify-center gap-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Architectural Grid
              </h3>
              <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                View Project
              </button>
              <button className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                Explore
              </button>
            </div>

            {/* Immersive Scroll */}
            <div className="p-6 bg-black rounded-xl border border-gray-800 flex flex-col items-center justify-center gap-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Immersive Scroll
              </h3>
              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-emerald-400 transition-colors">
                Enter
              </button>
              <button className="text-white text-sm font-serif italic hover:text-emerald-400 transition-colors">
                Discover &rarr;
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
