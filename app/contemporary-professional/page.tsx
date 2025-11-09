import Link from "next/link"

export default function ContemporaryProfessional() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white text-slate-900"
      style={{ fontFamily: "Work Sans, sans-serif" }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-indigo-100">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-teal-500" />
            <span className="font-semibold tracking-tight text-slate-900">Theresa Kennish Art</span>
          </div>
          <div className="flex items-center gap-10 text-sm">
            <a href="#work" className="text-slate-600 hover:text-indigo-600 transition-colors">
              Work
            </a>
            <a href="#gallery" className="text-slate-600 hover:text-indigo-600 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">
              Contact
            </a>
          </div>
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            Back
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200/30 to-teal-200/30 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Circular Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-indigo-100 to-teal-100 flex items-center justify-center shadow-lg">
              <svg className="w-40 h-40 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-6 0-8 3-8 3v6h16v-6s-2-3-8-3z" />
              </svg>
            </div>
          </div>

          {/* Right: Artist Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-8 h-1 bg-gradient-to-r from-indigo-600 to-teal-500" />
              <p className="text-sm text-indigo-600 font-medium">Contemporary Portfolio</p>
            </div>

            <div>
              <h1 className="text-5xl font-semibold leading-tight">Theresa Kennish</h1>
              <p className="text-lg text-teal-600 font-medium mt-2">Contemporary Mixed Media Artist</p>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-lg text-base">
              Theresa explores the intersection of traditional techniques and digital innovation, creating immersive
              experiences that challenge perceptions of space and form. Her work has been featured in galleries across
              the Pacific Northwest.
            </p>

            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-medium hover:shadow-lg transition-all">
              View Current Work
            </button>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-indigo-100" id="work">
        <div className="flex items-center gap-2 mb-8">
          <h3 className="text-2xl font-semibold text-slate-900">Current Series</h3>
          <span className="text-xs uppercase tracking-widest text-teal-600 font-semibold">2024</span>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-teal-100 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative h-96 bg-gradient-to-br from-indigo-50 via-white to-teal-50 rounded-xl shadow-lg overflow-hidden" />
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-slate-900">Digital Abstractions</h4>
            <p className="text-slate-600 leading-relaxed mb-6">
              A series exploring the intersection of analog and digital processes, where brush strokes meet pixels in a
              harmonious balance of tradition and innovation.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-indigo-100">
              <div>
                <p className="text-sm text-indigo-600 font-semibold">15 Pieces</p>
                <p className="text-xs text-slate-500 mt-1">In collection</p>
              </div>
              <div>
                <p className="text-sm text-teal-600 font-semibold">Mixed Media</p>
                <p className="text-xs text-slate-500 mt-1">Various formats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-indigo-100" id="gallery">
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900">Featured Work</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
            Explore my past works and click to view each series. Each piece represents a distinct chapter in my journey
            of artistic exploration and creative growth.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="group">
            <div className="aspect-video bg-gradient-to-br from-indigo-100 to-slate-100 rounded-lg shadow-md overflow-hidden group-hover:shadow-lg transition-all duration-500" />
            <p className="text-sm text-slate-600 mt-3 font-medium">Abstract Forms</p>
          </div>
          <div className="group">
            <div className="aspect-video bg-gradient-to-bl from-teal-100 to-slate-100 rounded-lg shadow-md overflow-hidden group-hover:shadow-lg transition-all duration-500" />
            <p className="text-sm text-slate-600 mt-3 font-medium">Digital Landscapes</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="group">
            <div className="aspect-square bg-gradient-to-br from-indigo-100 to-teal-50 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-500" />
          </div>
          <div className="group">
            <div className="aspect-square bg-gradient-to-br from-teal-100 to-indigo-50 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-500" />
          </div>
          <div className="group">
            <div className="aspect-square bg-gradient-to-br from-slate-100 via-indigo-50 to-teal-50 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-100 bg-indigo-50/50" id="contact">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-3 gap-12 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold mb-3">Contact</p>
              <a
                href="mailto:theresa@kennishart.com"
                className="text-slate-900 hover:text-indigo-600 transition-colors font-medium"
              >
                theresa@kennishart.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold mb-3">Follow</p>
              <a
                href="https://instagram.com/theresa.kennish"
                className="text-slate-900 hover:text-indigo-600 transition-colors font-medium"
              >
                @theresa.kennish
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold mb-3">Based In</p>
              <p className="text-slate-900 font-medium">Amsterdam, Netherlands</p>
            </div>
          </div>
          <div className="pt-8 border-t border-indigo-200 flex items-center justify-between text-xs text-slate-500">
            <p>© 2025 Theresa Kennish Art. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-full" />
              <span>Crafted with care</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
