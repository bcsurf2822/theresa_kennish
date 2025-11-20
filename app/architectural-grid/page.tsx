import Image from "next/image";
import Link from "next/link";

export default function ArchitecturalGrid() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 md:px-12 opacity-[0.03]">
        <div className="w-px h-full bg-black" />
        <div className="w-px h-full bg-black" />
        <div className="w-px h-full bg-black" />
        <div className="w-px h-full bg-black" />
        <div className="w-px h-full bg-black" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="flex justify-between items-center px-4 md:px-12 h-16">
          <Link href="/" className="font-medium tracking-tight text-lg">
            Theresa Kennish
          </Link>
          <div className="flex gap-8 text-sm font-medium text-neutral-500">
            <a
              href="#current"
              className="hover:text-neutral-900 transition-colors"
            >
              Current
            </a>
            <a
              href="#portfolio"
              className="hover:text-neutral-900 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-neutral-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 md:px-12 min-h-[80vh] flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-neutral-900 mb-8 leading-[0.9]">
              Structure <br />
              <span className="text-neutral-400">&</span> Fluidity
            </h1>
            <p className="text-xl text-neutral-600 max-w-xl leading-relaxed">
              Theresa Kennish is a mixed media artist examining the relationship
              between architectural lines and organic forms.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="w-full h-px bg-neutral-200" />
            <div className="flex justify-between text-sm font-medium text-neutral-500">
              <span>Based in California</span>
              <span>Est. 2010</span>
            </div>
            <a
              href="#portfolio"
              className="mt-8 inline-block px-8 py-4 bg-neutral-900 text-white text-center font-medium hover:bg-neutral-800 transition-colors"
            >
              View Selected Works
            </a>
          </div>
        </div>
      </section>

      {/* Current Series Section */}
      <section
        id="current"
        className="py-32 border-t border-neutral-100 relative z-10"
      >
        <div className="px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative aspect-square bg-neutral-50">
              <Image
                src="/artwork/surf2.JPG"
                alt="Current Series"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">
                Current Series
              </span>
              <h2 className="text-4xl font-light tracking-tight text-neutral-900">
                Coastal Rhythms
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link
                href="/series/coastal-rhythms"
                className="text-neutral-900 font-medium border-b border-neutral-900 pb-1 self-start hover:text-neutral-600 hover:border-neutral-600 transition-colors"
              >
                Explore Series
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-32 border-t border-neutral-100 relative z-10 bg-neutral-50"
      >
        <div className="px-4 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-light tracking-tight text-neutral-900">
              Portfolio
            </h2>
            <span className="text-sm text-neutral-500">
              Selected Collections
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {/* Series Card 1 */}
            <Link
              href="/series/oceanic-horizons"
              className="group bg-white p-8 md:p-12 hover:bg-neutral-50 transition-colors block"
            >
              <div className="aspect-square relative mb-8 overflow-hidden bg-neutral-100">
                <Image
                  src="/artwork/minimal_geometric.png"
                  alt="Oceanic Horizons"
                  fill
                  className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Oceanic Horizons
              </h3>
              <p className="text-sm text-neutral-500">Oil on Canvas • 2024</p>
            </Link>

            {/* Series Card 2 */}
            <Link
              href="/series/coastal-rhythms"
              className="group bg-white p-8 md:p-12 hover:bg-neutral-50 transition-colors block"
            >
              <div className="aspect-square relative mb-8 overflow-hidden bg-neutral-100">
                <Image
                  src="/artwork/surf1.JPG"
                  alt="Coastal Rhythms"
                  fill
                  className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Coastal Rhythms
              </h3>
              <p className="text-sm text-neutral-500">Oil on Canvas • 2023</p>
            </Link>

            {/* Series Card 3 */}
            <Link
              href="/series/urban-echoes"
              className="group bg-white p-8 md:p-12 hover:bg-neutral-50 transition-colors block"
            >
              <div className="aspect-square relative mb-8 overflow-hidden bg-neutral-100">
                <Image
                  src="/artwork/ocean_city.jpg"
                  alt="Urban Echoes"
                  fill
                  className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Urban Echoes
              </h3>
              <p className="text-sm text-neutral-500">Photography • 2022</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-24 border-t border-neutral-100 bg-white relative z-10"
        id="contact"
      >
        <div className="px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-lg font-medium text-neutral-900 mb-4">
              Contact
            </h2>
            <div className="flex gap-8 text-neutral-500">
              <a
                href="mailto:theresa@kennishart.com"
                className="hover:text-neutral-900 transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
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
                Email
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-neutral-900 transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
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
                Instagram
              </a>
            </div>
          </div>
          <p className="text-sm text-neutral-400">© 2025 Theresa Kennish</p>
        </div>
      </footer>
    </div>
  );
}
