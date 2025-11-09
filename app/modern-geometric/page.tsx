import Link from "next/link"

export default function ModernGeometric() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-mono">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-emerald-200">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="w-8 h-8 bg-emerald-600 transform rotate-45" />
          <div className="flex items-center gap-12">
            <a href="#work" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
              Work
            </a>
            <a href="#gallery" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </div>
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            Back
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center relative overflow-hidden">
        {/* Geometric background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-300 opacity-10 transform rotate-45" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 border-4 border-emerald-100 transform -rotate-12" />

        <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-2 gap-20 items-center relative z-10">
          {/* Left: Square Profile Image with Geometric Border */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-emerald-600 transform rotate-3" />
              <div className="w-80 h-80 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center relative z-10">
                <svg className="w-40 h-40 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M12 14c-6 0-8 3-8 3v6h16v-6s-2-3-8-3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Artist Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-teal-500" />
              <h1 className="text-4xl font-bold leading-tight">Theresa Kennish Art</h1>
            </div>
            <p className="text-lg text-emerald-600 font-semibold">Contemporary Mixed Media Artist</p>

            <p className="text-slate-600 leading-relaxed max-w-lg text-base">
              Theresa explores the intersection of traditional techniques and digital innovation, creating immersive
              experiences that challenge perceptions of space and form. Her work has been featured in galleries across
              the Pacific Northwest.
            </p>

            <button className="mt-8 px-8 py-3 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">
              Explore Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-emerald-100" id="work">
        <h3 className="text-3xl font-bold mb-16 text-slate-900">Current Series</h3>
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 transform -rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-tl from-teal-100 to-emerald-50 ml-8 mt-4" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-teal-500" />
              <h4 className="text-2xl font-bold">Digital Geometry</h4>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Exploring the intersection of mathematical patterns and creative expression through geometric abstraction.
            </p>
            <div className="flex gap-8 text-sm">
              <div>
                <p className="text-emerald-600 font-semibold">2024</p>
                <p className="text-slate-500">Year</p>
              </div>
              <div>
                <p className="text-emerald-600 font-semibold">12</p>
                <p className="text-slate-500">Pieces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-emerald-100" id="gallery">
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-slate-900">Portfolio</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
            Explore my past works and click to view each series. Each collection tells a unique story of artistic
            exploration and innovation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 transform hover:-rotate-1 transition-transform" />
          <div className="aspect-square bg-gradient-to-bl from-teal-100 to-emerald-50 transform hover:rotate-1 transition-transform" />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="aspect-square bg-gradient-to-br from-emerald-50 to-teal-50 transform hover:-rotate-1 transition-transform" />
          <div className="aspect-square bg-gradient-to-br from-teal-100 to-emerald-100 transform hover:rotate-1 transition-transform" />
          <div className="aspect-square bg-gradient-to-bl from-emerald-100 to-teal-50 transform hover:-rotate-1 transition-transform" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-emerald-50" id="contact">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold mb-3">Email</p>
              <a
                href="mailto:theresa@kennishart.com"
                className="text-slate-900 hover:text-emerald-600 transition-colors"
              >
                theresa@kennishart.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold mb-3">Follow</p>
              <a
                href="https://instagram.com/theresa.kennish"
                className="text-slate-900 hover:text-emerald-600 transition-colors"
              >
                @theresa.kennish
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold mb-2">Location</p>
              <p className="text-slate-900">Berlin, Germany</p>
            </div>
          </div>
          <div className="pt-8 border-t border-emerald-200 text-center text-xs text-slate-500">
            © 2025 Theresa Kennish Art. Geometric exploration series.
          </div>
        </div>
      </footer>
    </div>
  )
}
