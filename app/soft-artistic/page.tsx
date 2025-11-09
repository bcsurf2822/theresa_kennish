import Link from "next/link"

export default function SoftArtistic() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-blue-50 text-slate-900"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-cyan-100">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-xl font-light tracking-tight text-cyan-700">Theresa Kennish Art</div>
          <div className="flex items-center gap-10">
            <a href="#work" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors">
              Work
            </a>
            <a href="#gallery" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors">
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
        {/* Soft organic background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-64 h-64 bg-gradient-to-tr from-blue-200 to-cyan-300 rounded-full opacity-20 blur-3xl" />

        <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-2 gap-20 items-center relative z-10">
          {/* Left: Circular Profile Image with Soft Gradient Border */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-cyan-300 via-blue-300 to-cyan-400 rounded-full opacity-30 blur-2xl" />
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 flex items-center justify-center relative z-10 shadow-xl">
                <svg className="w-40 h-40 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M12 14c-6 0-8 3-8 3v6h16v-6s-2-3-8-3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Artist Information */}
          <div className="space-y-6">
            <p className="text-sm text-cyan-600 font-light tracking-wide">Welcome to my studio</p>
            <h1 className="text-5xl font-light leading-tight">Theresa Kennish</h1>
            <p className="text-lg text-cyan-600 font-light">Contemporary Mixed Media Artist</p>

            <p className="text-slate-600 leading-relaxed max-w-lg text-base">
              Theresa explores the intersection of traditional techniques and digital innovation, creating immersive
              experiences that challenge perceptions of space and form. Her work has been featured in galleries across
              the Pacific Northwest.
            </p>

            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-light hover:shadow-lg transition-all">
              View Current Work
            </button>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-cyan-100/50 relative" id="work">
        <h3 className="text-3xl font-light mb-16 text-slate-900">What I'm Creating Now</h3>
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 opacity-80" />
            <div className="absolute -inset-32 bg-gradient-to-br from-cyan-300 to-blue-200 blur-3xl opacity-20 animate-pulse" />
          </div>
          <div>
            <h4 className="text-2xl font-light mb-6 text-slate-900">Watercolor Dreams Series</h4>
            <p className="text-slate-600 leading-relaxed mb-6">
              A collection exploring soft transitions between colors, inspired by the ephemeral nature of watercolor
              mediums. Each piece flows organically, inviting contemplation and emotional connection.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-slate-500">
                <span className="text-cyan-600 font-light">Medium:</span> Mixed media on canvas
              </p>
              <p className="text-sm text-slate-500">
                <span className="text-cyan-600 font-light">Period:</span> 2023-2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-cyan-100/50" id="gallery">
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-4 text-slate-900">Selected Works</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl font-light">
            Explore my past works and click to view series. Each piece in my collection represents a moment of artistic
            discovery and growth.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="aspect-square bg-gradient-to-br from-blue-100 via-cyan-50 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" />
          <div className="aspect-square bg-gradient-to-bl from-cyan-100 via-white to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="aspect-square bg-gradient-to-br from-purple-50 via-blue-100 to-cyan-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" />
          <div className="aspect-square bg-gradient-to-br from-cyan-100 via-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow" />
          <div className="aspect-square bg-gradient-to-bl from-blue-100 via-cyan-100 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-100/50 bg-white/50 backdrop-blur" id="contact">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-xs text-cyan-600 font-light mb-3 tracking-wide">Get In Touch</p>
              <a href="mailto:theresa@kennishart.com" className="text-slate-900 hover:text-cyan-600 transition-colors">
                theresa@kennishart.com
              </a>
            </div>
            <div>
              <p className="text-xs text-cyan-600 font-light mb-3 tracking-wide">Follow</p>
              <a
                href="https://instagram.com/theresa.kennish"
                className="text-slate-900 hover:text-cyan-600 transition-colors"
              >
                @theresa.kennish
              </a>
            </div>
            <div>
              <p className="text-xs text-cyan-600 font-light mb-3 tracking-wide">Based In</p>
              <p className="text-slate-900">Tokyo, Japan</p>
            </div>
          </div>
          <div className="pt-8 border-t border-cyan-100 text-center text-xs text-slate-500">
            © 2025 Theresa Kennish Art. Exploring softness and beauty.
          </div>
        </div>
      </footer>
    </div>
  )
}
