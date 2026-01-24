import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";

interface Series {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  coverImage: string | null;
  order: number;
}

interface About {
  _id: string;
  profileImage: string | null;
  bio: Array<{ children: Array<{ text: string }> }>;
  secondaryTitle: string;
  secondaryAbout: Array<{ children: Array<{ text: string }> }>;
  secondaryImage: string | null;
}

const SERIES_QUERY = `*[_type == "series"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  "coverImage": coverImage.asset->url,
  order
}`;

const ABOUT_QUERY = `*[_type == "about"][0] {
  _id,
  "profileImage": profileImage.asset->url,
  bio,
  secondaryTitle,
  secondaryAbout,
  "secondaryImage": secondaryImage.asset->url
}`;

async function getSeries(): Promise<Series[]> {
  return client.fetch(SERIES_QUERY);
}

async function getAbout(): Promise<About | null> {
  return client.fetch(ABOUT_QUERY);
}

// Helper function to extract text from Portable Text
function extractText(blocks: Array<{ children: Array<{ text: string }> }> | undefined): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) =>
      block.children?.map((child) => child.text).join("") || ""
    )
    .join("\n");
}

export default async function ImmersiveScroll() {
  const [series, about] = await Promise.all([getSeries(), getAbout()]);

  // Get the first series as "current series" for featured section
  const currentSeries = series.length > 0 ? series[0] : null;

  // Get bio text
  const bioText = about ? extractText(about.bio) : "";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-serif overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link
          href="/"
          className="text-2xl italic font-bold tracking-tight drop-shadow-md"
        >
          Theresa Kennish
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase drop-shadow-md">
          <a
            href="#current"
            className="hover:text-emerald-400 transition-colors"
          >
            Current
          </a>
          <a
            href="#portfolio"
            className="hover:text-emerald-400 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {about?.profileImage ? (
            <Image
              src={about.profileImage}
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <Image
              src="/artwork/waves1.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl px-6">
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
            NATURE
            <br />
            <span className="italic font-light text-emerald-200">
              REIMAGINED
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white max-w-2xl mx-auto drop-shadow-lg">
            {bioText || "Capturing the ephemeral moments of light and water."}
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white drop-shadow-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Current Series Section */}
      {currentSeries && (
        <section
          id="current"
          className="min-h-screen flex items-center py-24 relative"
        >
          <div className="max-w-[1800px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">
                  Current Exhibition
                </span>
                <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9]">
                  {currentSeries.title.split(" ")[0]?.toUpperCase() || "FEATURED"}
                  <br />
                  <span className="italic font-light text-slate-400">
                    {currentSeries.title.split(" ").slice(1).join(" ")?.toUpperCase() || "SERIES"}
                  </span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-600 font-light">
                {currentSeries.description || "Explore this unique collection of artwork."}
              </p>
              <Link
                href={`/series/${currentSeries.slug?.current}`}
                className="inline-flex items-center gap-4 text-xl font-bold hover:gap-6 transition-all text-emerald-700"
              >
                Explore the Series <span className="text-2xl">→</span>
              </Link>
            </div>
            <div className="relative aspect-[3/4] order-1 lg:order-2">
              <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl opacity-50 transform translate-x-12 translate-y-12" />
              {currentSeries.coverImage ? (
                <Image
                  src={currentSeries.coverImage}
                  alt={currentSeries.title}
                  fill
                  className="object-cover rounded-lg shadow-2xl relative z-10"
                />
              ) : (
                <Image
                  src="/artwork/jetty_ocean.jpg"
                  alt="Current Series Feature"
                  fill
                  className="object-cover rounded-lg shadow-2xl relative z-10"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-slate-50">
        <div className="max-w-[1800px] mx-auto px-8">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-24 text-center">
            PORTFOLIO
          </h2>

          <div className="space-y-32">
            {series.length > 0 ? (
              series.map((s, index) => (
                <Link
                  key={s._id}
                  href={`/series/${s.slug?.current}`}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:col-span-7 relative aspect-video overflow-hidden rounded-lg">
                        {s.coverImage ? (
                          <Image
                            src={s.coverImage}
                            alt={s.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                            No Image
                          </div>
                        )}
                      </div>
                      <div className="md:col-span-5 space-y-4 md:pl-8">
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-xl text-slate-500 font-light">
                          View Collection
                        </p>
                        <p className="text-lg text-slate-600">
                          {s.description || "Explore this series of artwork."}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:col-span-5 space-y-4 md:pr-8 md:text-right order-2 md:order-1">
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-xl text-slate-500 font-light">
                          View Collection
                        </p>
                        <p className="text-lg text-slate-600">
                          {s.description || "Explore this series of artwork."}
                        </p>
                      </div>
                      <div className="md:col-span-7 relative aspect-[3/4] overflow-hidden rounded-lg order-1 md:order-2">
                        {s.coverImage ? (
                          <Image
                            src={s.coverImage}
                            alt={s.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                            No Image
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </Link>
              ))
            ) : (
              <div className="text-center py-24 text-slate-500">
                No series available yet. Add series from the admin dashboard.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-900 py-32" id="contact">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Let's Connect
          </h2>
          <div className="flex justify-center gap-12 text-xl font-bold">
            <a
              href="mailto:theresakennish@gmail.com"
              className="hover:text-emerald-400 transition-colors"
            >
              Email
            </a>
            <a
              href="https://instagram.com/theresakennart"
              className="hover:text-emerald-400 transition-colors"
            >
              Instagram
            </a>
          </div>
          <p className="text-slate-500 pt-12">© {new Date().getFullYear()} Theresa Kennish</p>
        </div>
      </footer>
    </div>
  );
}
