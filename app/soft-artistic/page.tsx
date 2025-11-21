import Image from "next/image";
import Link from "next/link";

export default function SoftArtistic() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans">
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-sm border border-white/50 flex gap-8 text-sm font-medium tracking-wide">
        <a href="#home" className="hover:text-cyan-700 transition-colors">
          Home
        </a>
        <a href="#current" className="hover:text-cyan-700 transition-colors">
          Current
        </a>
        <a href="#portfolio" className="hover:text-cyan-700 transition-colors">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-cyan-700 transition-colors">
          Contact
        </a>
        <Link
          href="/"
          className="text-slate-400 hover:text-slate-600 border-l border-slate-300 pl-8"
        >
          Back
        </Link>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
          <Image
            src="/artwork/abstract_watercolor.png"
            alt="Background Texture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-3xl px-6 animate-in fade-in duration-1000 slide-in-from-bottom-8">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-8 relative">
            <Image
              src="/personal/in_studio.png"
              alt="Theresa Kennish"
              fill
              className="object-cover"
            />
          </div>
          <h1
            className="text-5xl md:text-7xl font-light text-slate-800 tracking-tight"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Theresa Kennish
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-500">
            Exploring light, texture, and form through mixed media and
            contemporary techniques.
          </p>
          <div className="pt-8">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-cyan-900 text-white rounded-full hover:bg-cyan-800 transition-all hover:shadow-lg hover:scale-105 inline-block"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Current Series Section */}
      <section id="current" className="max-w-5xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-white p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/artwork/surf1.JPG"
                alt="Current Series Work"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <span className="text-cyan-700 font-bold tracking-widest text-xs uppercase">
              Current Series
            </span>
            <h2
              className="text-4xl font-light text-slate-900"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Coastal Rhythms
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <Link
              href="/series/coastal-rhythms"
              className="text-cyan-700 font-medium hover:underline underline-offset-4 inline-block mt-4"
            >
              View Full Series &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section (Renamed from Selected Series) */}
      <section
        className="max-w-7xl mx-auto px-8 py-32 bg-white rounded-3xl shadow-sm my-12"
        id="portfolio"
      >
        <div className="text-center mb-20 space-y-4">
          <h2
            className="text-4xl font-light text-slate-900"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Portfolio
          </h2>
          <p className="text-slate-500">
            Selected works organized by collection
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Series Card 1 */}
          <Link
            href="/series/oceanic-horizons"
            className="group block space-y-6 cursor-pointer"
          >
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/artwork/generated/Generated Image November 21, 2025 - 3_56PM (1).png"
                alt="Oceanic Horizons"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/20 transition-colors duration-500" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-medium text-slate-800 group-hover:text-cyan-700 transition-colors">
                Oceanic Horizons
              </h3>
              <p className="text-sm text-slate-400">2024 • Mixed Media</p>
            </div>
          </Link>

          {/* Series Card 2 */}
          <Link
            href="/series/coastal-rhythms"
            className="group block space-y-6 cursor-pointer md:-translate-y-12"
          >
            <div className="aspect-video relative overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
              <Image
                src="/artwork/generated/Generated Image November 21, 2025 - 3_57PM.png"
                alt="Coastal Rhythms"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/20 transition-colors duration-500" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-medium text-slate-800 group-hover:text-cyan-700 transition-colors">
                Coastal Rhythms
              </h3>
              <p className="text-sm text-slate-400">2023 • Oil on Canvas</p>
            </div>
          </Link>

          {/* Series Card 3 */}
          <Link
            href="/series/urban-echoes"
            className="group block space-y-6 cursor-pointer"
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/artwork/generated/Generated Image November 21, 2025 - 3_58PM.png"
                alt="Urban Echoes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/20 transition-colors duration-500" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-medium text-slate-800 group-hover:text-cyan-700 transition-colors">
                Urban Echoes
              </h3>
              <p className="text-sm text-slate-400">2022 • Photography</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-24 text-center" id="contact">
        <div className="max-w-md mx-auto px-6 space-y-12">
          <h2
            className="text-3xl font-light text-slate-800"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Contact
          </h2>

          <div className="flex justify-center gap-12">
            <a
              href="mailto:theresa@kennishart.com"
              className="flex flex-col items-center gap-3 text-slate-500 hover:text-cyan-700 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-all">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-sm">Email</span>
            </a>

            <a
              href="https://instagram.com"
              className="flex flex-col items-center gap-3 text-slate-500 hover:text-cyan-700 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-all">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    strokeWidth={1.5}
                  />
                </svg>
              </div>
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          <div className="pt-12 border-t border-slate-200">
            <p className="text-slate-400 text-sm">© 2025 Theresa Kennish</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
