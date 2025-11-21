import Image from "next/image";
import Link from "next/link";
import { Mail, Instagram } from "lucide-react";

export default function ArchitecturalGrid() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-serif tracking-tight text-slate-900 hover:opacity-70 transition-opacity"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Theresa Kennish
          </Link>
          <div className="hidden md:flex gap-12 text-base font-bold tracking-widest uppercase text-slate-800">
            <a
              href="#current"
              className="hover:text-blue-900 transition-colors duration-300"
            >
              Current
            </a>
            <a
              href="#portfolio"
              className="hover:text-blue-900 transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="hover:text-blue-900 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-blue-900 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 md:px-12 min-h-[90vh] flex flex-col justify-center relative overflow-hidden z-0">
        {/* Background Art */}
        {/* Background Art */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <Image
            src="/artwork/beach1.png"
            alt="Background Texture"
            fill
            className="object-cover object-center opacity-50"
          />
        </div>

        <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards relative">
            <h1
              className="text-7xl md:text-9xl font-bold tracking-tight text-black leading-[0.9]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Coastal <br />
              <span className="text-blue-950 italic">Elegance</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-800 max-w-xl leading-relaxed font-medium">
              Capturing the serene rhythm of the ocean and the structured beauty
              of the coast.
            </p>
            <div className="pt-8">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-10 py-4 bg-blue-900 text-white text-base font-bold tracking-widest uppercase hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View Collection
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/5] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-forwards opacity-0">
            <div className="absolute inset-0 bg-blue-100 rounded-t-[10rem] transform translate-x-4 translate-y-4 -z-10" />
            <div className="relative h-full w-full rounded-t-[10rem] overflow-hidden shadow-2xl">
              <Image
                src="/artwork/generated/Generated Image November 21, 2025 - 3_56PM (1).png"
                alt="Theresa Kennish Hero Art"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Series Section */}
      <section id="current" className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-square">
              <div className="absolute inset-0 bg-slate-50 transform -rotate-3 scale-105" />
              <div className="relative h-full w-full shadow-xl overflow-hidden">
                <Image
                  src="/artwork/jetty_ocean.jpg"
                  alt="Current Series"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-blue-900 text-base font-bold tracking-widest uppercase mb-4 block">
                Current Series
              </span>
              <h2
                className="text-5xl md:text-6xl text-slate-900 mb-6 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Coastal Rhythms
              </h2>
              <p className="text-xl text-slate-800 leading-relaxed">
                An exploration of the ever-changing dialogue between land and
                sea. This series focuses on the textures, light, and movement
                found at the water's edge, inviting the viewer to pause and
                breathe.
              </p>
              <Link
                href="/series/coastal-rhythms"
                className="inline-flex items-center gap-3 text-blue-900 font-medium hover:gap-6 transition-all duration-300"
              >
                Explore the Series <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-32 bg-[#FDFCF8]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Selected Works
            </h2>
            <p className="text-slate-500 text-base">
              Curated collections of oil paintings, photography, and mixed media
              pieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <Link
              href="/series/oceanic-horizons"
              className="group block space-y-6"
            >
              <div className="aspect-[4/5] relative overflow-hidden shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                <Image
                  src="/artwork/generated/Generated Image November 21, 2025 - 3_59PM.png"
                  alt="Oceanic Horizons"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3
                  className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Oceanic Horizons
                </h3>
                <p className="text-base text-slate-600 tracking-widest uppercase">
                  Oil on Canvas
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/series/coastal-rhythms"
              className="group block space-y-6 md:translate-y-16"
            >
              <div className="aspect-[4/5] relative overflow-hidden shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                <Image
                  src="/artwork/generated/Generated Image November 21, 2025 - 4_02PM.png"
                  alt="Coastal Rhythms"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3
                  className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Coastal Rhythms
                </h3>
                <p className="text-sm text-slate-500 tracking-widest uppercase">
                  Mixed Media
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/series/urban-echoes" className="group block space-y-6">
              <div className="aspect-[4/5] relative overflow-hidden shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                <Image
                  src="/artwork/surf2.JPG"
                  alt="Urban Echoes"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3
                  className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Urban Echoes
                </h3>
                <p className="text-sm text-slate-500 tracking-widest uppercase">
                  Photography
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Artist Statement */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative aspect-[3/4] bg-slate-100">
              <Image
                src="/artwork/generated/Generated Image November 21, 2025 - 3_58PM.png"
                alt="Theresa Kennish Portrait"
                fill
                className="object-cover opacity-90"
              />
            </div>
            <div className="lg:col-span-7 space-y-8">
              <h2
                className="text-5xl md:text-6xl text-slate-900 mb-6 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                "I find peace in the horizon line, where the infinite sky meets
                the grounded earth."
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Living by the coast has always been my primary source of
                  inspiration. The daily rhythm of the tides, the shifting light
                  across the water, and the quiet strength of the dunes all find
                  their way into my work.
                </p>
                <p>
                  My art is an invitation to slow down. In a world that moves
                  incredibly fast, I want to create spaces of stillness and
                  reflection. Whether through the texture of oil paint or the
                  clarity of a photograph, my goal is to capture the essence of
                  calm.
                </p>
              </div>
              <div>
                <Image
                  src="/personal/signature.png"
                  alt="Signature"
                  width={200}
                  height={100}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#FDFCF8] pt-32 pb-12">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 text-center">
          <h2
            className="text-5xl md:text-6xl text-slate-900 mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Theresa Kennish Art
          </h2>
          <div className="flex flex-col items-center gap-6 mb-24">
            <a
              href="mailto:theresakennish@gmail.com"
              className="flex items-center gap-3 text-2xl md:text-3xl text-slate-800 hover:text-blue-900 transition-colors"
            >
              <Mail className="w-8 h-8" />
              theresakennish@gmail.com
            </a>
            <a
              href="https://instagram.com/theresakennart"
              className="flex items-center gap-3 text-2xl md:text-3xl text-slate-800 hover:text-blue-900 transition-colors"
            >
              <Instagram className="w-8 h-8" />
              @theresakennart
            </a>
          </div>
          <div className="border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <p>© 2025 Theresa Kennish Art. All rights reserved.</p>
            <p>Designed with intention in California.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
