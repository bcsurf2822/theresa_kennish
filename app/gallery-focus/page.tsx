import Image from "next/image";
import Link from "next/link";

export default function GalleryFocus() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium tracking-tight">
            Theresa Kennish
          </Link>
          <div className="hidden md:flex gap-12 text-sm font-medium text-stone-500">
            <a
              href="#current"
              className="hover:text-stone-900 transition-colors"
            >
              Current
            </a>
            <a
              href="#portfolio"
              className="hover:text-stone-900 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-stone-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Updated: Bio/Name focus, not featured series) */}
      <section className="pt-32 pb-20 px-8 max-w-[1600px] mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[60vh] min-h-[500px] rounded-sm overflow-hidden bg-stone-200">
            <Image
              src="/artwork/waves1.png"
              alt="Theresa Kennish Art"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="lg:col-span-5 space-y-8">
            <h1 className="text-5xl md:text-6xl font-normal leading-tight text-stone-900">
              Theresa Kennish
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-md">
              A contemporary artist exploring the textures of the natural world
              through oil, photography, and mixed media.
            </p>
            <div className="flex gap-6 pt-4">
              <a
                href="#portfolio"
                className="px-8 py-3 bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-stone-300 text-stone-600 text-sm font-medium hover:border-stone-900 hover:text-stone-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Series Section */}
      <section
        id="current"
        className="max-w-[1600px] mx-auto px-8 py-32 border-t border-stone-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-400">
              Current Series
            </span>
            <h2 className="text-3xl font-normal text-stone-900">
              Coastal Rhythms
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link
              href="/series/coastal-rhythms"
              className="inline-block text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors"
            >
              Oil on Canvas • 2024{" "}
            </Link>
          </div>
          <div className="order-1 md:order-2 relative aspect-square bg-stone-100">
            <Image
              src="/artwork/surf1.JPG"
              alt="Current Series"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Grid (Renamed from Collections) */}
      <section
        className="max-w-[1600px] mx-auto px-8 py-32 border-t border-stone-200"
        id="portfolio"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-3xl font-normal text-stone-900 mb-4">
              Portfolio
            </h2>
            <p className="text-stone-500 max-w-md leading-relaxed">
              Selected works organized by thematic exploration.
            </p>
          </div>
          <div className="hidden md:block w-32 h-px bg-stone-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {/* Series Card 1 */}
          <Link
            href="/series/coastal-rhythms"
            className="group block cursor-pointer"
          >
            <div className="aspect-[3/4] relative overflow-hidden bg-stone-100 mb-6">
              <Image
                src="/artwork/surf2.JPG"
                alt="Coastal Rhythms"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">
              Coastal Rhythms
            </h3>
            <p className="text-stone-500 text-sm">Oil on Canvas • 2023</p>
          </Link>

          {/* Series Card 2 */}
          <Link
            href="/series/oceanic-horizons"
            className="group block cursor-pointer"
          >
            <div className="aspect-square relative overflow-hidden bg-stone-100 mb-6">
              <Image
                src="/artwork/generated/Generated Image November 21, 2025 - 3_57PM.png"
                alt="Oceanic Horizons"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">
              Oceanic Horizons
            </h3>
            <p className="text-stone-500 text-sm">Mixed Media • 2024</p>
          </Link>

          {/* Series Card 3 */}
          <Link
            href="/series/urban-echoes"
            className="group block cursor-pointer"
          >
            <div className="aspect-video relative overflow-hidden bg-stone-100 mb-6">
              <Image
                src="/artwork/generated/Generated Image November 21, 2025 - 3_56PM (1).png"
                alt="Urban Echoes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">
              Urban Echoes
            </h3>
            <p className="text-stone-500 text-sm">Photography • 2022</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-24" id="contact">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-medium text-stone-900 mb-6">
              Contact
            </h2>
            <div className="flex gap-8">
              <a
                href="mailto:theresa@kennishart.com"
                className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors"
              >
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
                Email
              </a>
              <a
                href="https://instagram.com"
                className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors"
              >
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
                Instagram
              </a>
            </div>
          </div>
          <p className="text-stone-400 text-sm">© 2025 Theresa Kennish</p>
        </div>
      </footer>
    </div>
  );
}
