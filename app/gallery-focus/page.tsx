import Link from "next/link"

export default function GalleryFocus() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-600" />
            <span className="text-sm font-medium text-slate-700">Theresa Kennish Art</span>
          </div>
          <div className="flex items-center gap-10 text-sm">
            <a href="#featured" className="text-slate-600 hover:text-green-600 transition-colors">
              Featured
            </a>
            <a href="#collection" className="text-slate-600 hover:text-green-600 transition-colors">
              Collection
            </a>
            <a href="#contact" className="text-slate-600 hover:text-green-600 transition-colors">
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
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          {/* Left: Larger Rectangular Profile Image */}
          <div className="flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-50 rounded-lg shadow-xl flex items-center justify-center">
              <svg className="w-40 h-40 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-6 0-8 3-8 3v6h16v-6s-2-3-8-3z" />
              </svg>
            </div>
          </div>

          {/* Right: Artist Information */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-green-600 font-medium mb-3 uppercase tracking-wide">
                Photography & Contemporary Art
              </p>
              <h1 className="text-5xl font-light leading-tight mb-2">Theresa Kennish</h1>
              <p className="text-lg text-green-600 font-light">Contemporary Mixed Media Artist</p>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-lg text-base">
              Theresa explores the intersection of traditional techniques and digital innovation, creating immersive
              experiences that challenge perceptions of space and form. Her work has been featured in galleries across
              the Pacific Northwest.
            </p>

            <button className="mt-8 px-8 py-3 bg-green-600 text-white font-light hover:bg-green-700 transition-colors">
              View Current Work
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-green-100" id="featured">
        <h3 className="text-2xl font-light mb-12 text-slate-900">Featured Work</h3>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="aspect-video bg-gradient-to-br from-emerald-100 via-green-50 to-teal-50 rounded-lg shadow-md" />
          <div className="aspect-video bg-gradient-to-bl from-green-100 to-emerald-50 rounded-lg shadow-md" />
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="aspect-square bg-gradient-to-br from-teal-100 to-green-100 rounded-lg shadow-sm" />
          <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-50 rounded-lg shadow-sm" />
          <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-50 rounded-lg shadow-sm" />
          <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg shadow-sm" />
        </div>
      </section>

      {/* Collection Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-green-100" id="collection">
        <div className="mb-12">
          <h3 className="text-2xl font-light mb-4 text-slate-900">Complete Collection</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
            Explore my past works and click to view each series. Discover the stories and inspirations behind my
            complete collection of artistic works.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg shadow-md" />
          <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-50 rounded-lg shadow-md" />
          <div className="aspect-square bg-gradient-to-br from-teal-100 to-green-50 rounded-lg shadow-md" />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="aspect-square bg-gradient-to-br from-green-50 to-teal-100 rounded-lg shadow-md" />
          <div className="aspect-square bg-gradient-to-br from-emerald-100 via-green-50 to-teal-50 rounded-lg shadow-md" />
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="aspect-square bg-gradient-to-br from-teal-100 to-green-100 rounded-lg shadow-sm" />
          <div className="aspect-square bg-gradient-to-br from-green-100 to-teal-50 rounded-lg shadow-sm" />
          <div className="aspect-square bg-gradient-to-br from-emerald-50 to-green-100 rounded-lg shadow-sm" />
          <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg shadow-sm" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-100 bg-green-50" id="contact">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-3 gap-12 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-3">Email</p>
              <a href="mailto:theresa@kennishart.com" className="text-slate-900 hover:text-green-600 transition-colors">
                theresa@kennishart.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-3">Follow</p>
              <a
                href="https://instagram.com/theresa.kennish"
                className="text-slate-900 hover:text-green-600 transition-colors"
              >
                @theresa.kennish
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-3">Location</p>
              <p className="text-slate-900">Portland, OR</p>
            </div>
          </div>
          <div className="pt-8 border-t border-green-200 text-center text-xs text-slate-500">
            © 2025 Theresa Kennish Art. Photography & contemporary art.
          </div>
        </div>
      </footer>
    </div>
  )
}
