import Link from "next/link"

export default function BoldTypography() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" style={{ fontFamily: "Playfair Display, serif" }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-black uppercase tracking-tighter">Theresa Kennish</h1>
          <div className="flex items-center gap-12">
            <a
              href="#work"
              className="text-xs uppercase font-bold tracking-widest text-slate-600 hover:text-slate-900 transition-colors"
            >
              Work
            </a>
            <a
              href="#gallery"
              className="text-xs uppercase font-bold tracking-widest text-slate-600 hover:text-slate-900 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-xs uppercase font-bold tracking-widest text-slate-600 hover:text-slate-900 transition-colors"
            >
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
        <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-3 gap-16 items-center">
          {/* Left: Smaller Circular Profile Image */}
          <div className="flex justify-center">
            <div className="w-56 h-56 rounded-full bg-slate-200 flex items-center justify-center">
              <svg className="w-28 h-28 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-6 0-8 3-8 3v6h16v-6s-2-3-8-3z" />
              </svg>
            </div>
          </div>

          {/* Right: Typography-Dominant Content */}
          <div className="col-span-2 space-y-6">
            <div>
              <div className="w-2 h-20 bg-slate-900 mb-8" />
              <h1 className="text-7xl font-black leading-tight uppercase tracking-tighter">Theresa Kennish</h1>
            </div>
            <p className="text-xl text-slate-600 font-bold uppercase tracking-wide">Contemporary Mixed Media Artist</p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mt-8">
              Theresa explores the intersection of traditional techniques and digital innovation, creating immersive
              experiences that challenge perceptions of space and form. Her work has been featured in galleries across
              the Pacific Northwest.
            </p>

            <button className="mt-8 px-8 py-3 bg-slate-900 text-white font-black uppercase tracking-wider hover:bg-slate-800 transition-colors">
              View Current Work
            </button>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-slate-200" id="work">
        <h3 className="text-5xl font-black uppercase tracking-tighter mb-16 text-slate-900">Now</h3>
        <div className="grid grid-cols-2 gap-16">
          <div className="bg-slate-200 aspect-square flex items-end justify-start p-8">
            <div className="w-full h-32 bg-slate-400" />
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-4xl font-bold mb-6 uppercase tracking-tight">Monochrome Study</h4>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              A deep dive into form, shadow, and the power of singular chromatic exploration. Typography becomes form.
              Silence becomes substance.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-black text-slate-900">08</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Installations</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">2024</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Current Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-slate-200" id="gallery">
        <div className="mb-16">
          <h3 className="text-5xl font-black uppercase tracking-tighter mb-4 text-slate-900">Archive</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
            Explore my past works and click to view series. Each archive entry represents a significant chapter in my
            artistic practice.
          </p>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="aspect-square bg-slate-300" />
            <div className="aspect-square bg-slate-200" />
            <div className="aspect-square bg-slate-400" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-slate-250" />
            <div className="aspect-square bg-slate-300" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 text-white" id="contact">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="mb-12">
            <div className="w-2 h-12 bg-white mb-8" />
            <p className="text-5xl font-black uppercase tracking-tighter mb-8">Let's Talk</p>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">Email</p>
              <a href="mailto:theresa@kennishart.com" className="text-white hover:text-gray-300 transition-colors">
                theresa@kennishart.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">Follow</p>
              <a
                href="https://instagram.com/theresa.kennish"
                className="text-white hover:text-gray-300 transition-colors"
              >
                @theresa.kennish
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Based</p>
              <p className="text-white">Los Angeles, CA</p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700 text-xs uppercase tracking-widest text-gray-400 font-bold">
            © 2025 Theresa Kennish Art. All work is protected.
          </div>
        </div>
      </footer>
    </div>
  )
}
