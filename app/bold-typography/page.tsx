import Image from "next/image";
import Link from "next/link";

export default function BoldTypography() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-200 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
        <Link href="/" className="text-2xl font-black tracking-tighter">
          THERESA KENNISH
        </Link>
        <div className="hidden md:flex gap-12 font-bold text-sm tracking-widest uppercase">
          <a
            href="#current"
            className="hover:underline underline-offset-4 decoration-2"
          >
            Current
          </a>
          <a
            href="#portfolio"
            className="hover:underline underline-offset-4 decoration-2"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:underline underline-offset-4 decoration-2"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <h1
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-slate-900 mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            THERESA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              KENNISH
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-end justify-between gap-12 border-t-4 border-slate-900 pt-8">
            <p className="text-xl md:text-2xl font-bold max-w-xl leading-tight">
              Oil on Canvas artist exploring the intersection of digital
              precision and organic chaos.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center w-48 h-16 bg-slate-900 text-white font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* Current Series Section */}
      <section id="current" className="py-32 border-t border-slate-200">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-slate-100">
              <Image
                src="/artwork/surf2.JPG"
                alt="Current Series Feature"
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
            <div className="space-y-12">
              <div>
                <span className="block text-sm font-black tracking-widest uppercase mb-4 text-blue-600">
                  Current Series
                </span>
                <h2
                  className="text-6xl md:text-7xl font-black tracking-tighter mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  COASTAL RHYTHMS
                </h2>
                <p className="text-xl font-medium leading-relaxed text-slate-600 max-w-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <Link
                href="/series/coastal-rhythms"
                className="inline-block border-b-4 border-slate-900 pb-2 text-2xl font-bold hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                Explore Series
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section (Renamed from Series) */}
      <section className="py-32 bg-slate-50" id="portfolio">
        <div className="max-w-[1800px] mx-auto px-8">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-24 text-center md:text-left">
            PORTFOLIO
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Series Card 1 */}
            <Link
              href="/series/oceanic-horizons"
              className="group block w-full bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-500 overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/artwork/abstract_watercolor.png"
                  alt="Oceanic Horizons"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col justify-between border-t border-slate-100">
                <span className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-4 block">
                  01 / Digital
                </span>
                <div>
                  <h3
                    className="text-4xl font-black tracking-tighter mb-2 text-slate-900 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    OCEANIC HORIZONS
                  </h3>
                  <p className="font-bold text-slate-500">Oceanic Horizons</p>
                </div>
              </div>
            </Link>

            {/* Series Card 2 */}
            <Link
              href="/series/coastal-rhythms"
              className="group block w-full bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-500 overflow-hidden lg:translate-y-24"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/artwork/jetty_ocean.jpg"
                  alt="Coastal Rhythms"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col justify-between border-t border-slate-100">
                <span className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-4 block">
                  02 / Oil
                </span>
                <div>
                  <h3
                    className="text-4xl font-black tracking-tighter mb-2 text-slate-900 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    COASTAL RHYTHMS
                  </h3>
                  <p className="font-bold text-slate-500">2023 Collection</p>
                </div>
              </div>
            </Link>

            {/* Series Card 3 */}
            <Link
              href="/series/urban-echoes"
              className="group block w-full bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-500 overflow-hidden"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src="/artwork/beach1.png"
                  alt="Urban Echoes"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col justify-between border-t border-slate-100">
                <span className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-4 block">
                  03 / Photo
                </span>
                <div>
                  <h3
                    className="text-4xl font-black tracking-tighter mb-2 text-slate-900 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    URBAN ECHOES
                  </h3>
                  <p className="font-bold text-slate-500">2022 Collection</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-900 py-24" id="contact">
        <div className="max-w-[1800px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h2
              className="text-4xl font-black tracking-tighter mb-8"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              CONTACT
            </h2>
            <div className="space-y-4">
              <a
                href="mailto:theresa@kennishart.com"
                className="flex items-center gap-4 text-xl font-bold hover:text-blue-400 transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                theresa@kennishart.com
              </a>
              <a
                href="https://instagram.com"
                className="flex items-center gap-4 text-xl font-bold hover:text-blue-400 transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                @theresakennish
              </a>
            </div>
          </div>
          <div className="text-right self-end">
            <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              © 2025 Theresa Kennish
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
