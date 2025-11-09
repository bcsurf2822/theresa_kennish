import Link from "next/link"

export default function ClassicMinimal() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-serif">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="text-sm uppercase tracking-widest text-slate-600">Theresa Kennish Art</h1>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Work
            </a>
            <a href="#gallery" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </div>
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            Back
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          {/* Left: Circular Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-slate-100 shadow-lg flex items-center justify-center">
              <svg className="w-40 h-40 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-6 0-8 3-8 3v6h16v-6s-2-3-8-3z" />
              </svg>
            </div>
          </div>

          {/* Right: Artist Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-light leading-tight mb-2">Theresa Kennish</h1>
              <p className="text-lg text-blue-600 font-light">Contemporary Mixed Media Artist</p>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-lg text-base">
              Theresa explores the intersection of traditional techniques and digital innovation, creating immersive
              experiences that challenge perceptions of space and form. Her work has been featured in galleries across
              the Pacific Northwest.
            </p>

            <div className="h-1 w-12 bg-blue-500" />

            <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-light hover:bg-blue-700 transition-colors">
              View Current Work
            </button>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-slate-100" id="work">
        <h3 className="text-2xl font-light mb-16 uppercase tracking-wider text-slate-700">Current Work</h3>
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="aspect-square bg-gradient-to-br from-blue-50 to-slate-50 rounded-sm" />
          <div className="flex flex-col justify-center">
            <h4 className="text-xl font-light mb-4">Series: Blue Studies</h4>
            <p className="text-slate-600 leading-relaxed">
              An ongoing exploration of monochromatic color theories and their psychological impact on perception.
              Working with various mediums to understand depth and simplicity.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-slate-100" id="gallery">
        <div className="mb-16">
          <h3 className="text-2xl font-light mb-4 uppercase tracking-wider text-slate-700">Selected Works</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
            Explore my past works and view each series. Click on any piece to discover more about the creative journey
            behind each collection.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 rounded-sm" />
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-50 rounded-sm" />
          <div className="aspect-square bg-gradient-to-br from-slate-50 to-blue-50 rounded-sm" />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="aspect-square bg-gradient-to-br from-blue-50 to-slate-100 rounded-sm" />
          <div className="aspect-square bg-gradient-to-br from-slate-100 to-blue-100 rounded-sm" />
          <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-sm" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white" id="contact">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Email</p>
              <a href="mailto:theresa@kennishart.com" className="text-slate-900 hover:text-blue-600 transition-colors">
                theresa@kennishart.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Follow</p>
              <a
                href="https://instagram.com/theresa.kennish"
                className="text-slate-900 hover:text-blue-600 transition-colors"
              >
                @theresa.kennish
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Location</p>
              <p className="text-slate-900">New York, NY</p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 text-center text-xs text-slate-500">
            © 2025 Theresa Kennish Art. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
