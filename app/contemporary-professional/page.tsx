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

export default async function ContemporaryProfessional() {
  const [series, about] = await Promise.all([getSeries(), getAbout()]);

  // Get the first series as "current series" for featured section
  const currentSeries = series.length > 0 ? series[0] : null;

  // Get bio text
  const bioText = about ? extractText(about.bio) : "Welcome to the portfolio of Theresa Kennish.";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-indigo-900"
            >
              Theresa Kennish
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <a
                href="#current"
                className="hover:text-indigo-600 transition-colors"
              >
                Current Series
              </a>
              <a
                href="#portfolio"
                className="hover:text-indigo-600 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#process"
                className="hover:text-indigo-600 transition-colors"
              >
                My Approach
              </a>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Theresa Kennish
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {bioText || "Welcome to the portfolio of Theresa Kennish."}
            </p>
            <div className="flex gap-4">
              <a
                href="#portfolio"
                className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
            {about?.profileImage ? (
              <Image
                src={about.profileImage}
                alt="Theresa Kennish Art"
                fill
                className="object-cover"
                priority
              />
            ) : (
              <Image
                src="/artwork/surf2.JPG"
                alt="Theresa Kennish Art"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* Current Series Section */}
      {currentSeries && (
        <section
          className="bg-white py-24 border-y border-slate-100"
          id="current"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 relative aspect-square rounded-xl overflow-hidden shadow-lg bg-slate-200">
                {currentSeries.coverImage ? (
                  <Image
                    src={currentSeries.coverImage}
                    alt={currentSeries.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm">
                  Current Series
                </span>
                <h2 className="text-3xl font-bold text-slate-900">
                  {currentSeries.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {currentSeries.description || "Explore this collection of artwork."}
                </p>
                <Link
                  href={`/series/${currentSeries.slug?.current || currentSeries._id}`}
                  className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-2"
                >
                  View Series <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      <section className="max-w-7xl mx-auto px-8 py-24" id="portfolio">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Portfolio</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Browse collections by series.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {series.length > 0 ? (
            series.map((s) => (
              <Link
                key={s._id}
                href={`/series/${s.slug?.current || s._id}`}
                className="group block transition-all"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm group-hover:shadow-md bg-slate-200">
                  {s.coverImage ? (
                    <Image
                      src={s.coverImage}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2">
                    {s.description || "View collection"}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-12 text-slate-500">
              No series available yet. Add series from the admin dashboard.
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 text-white py-24" id="process">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Approach</h2>
              {about?.secondaryAbout ? (
                <p className="text-slate-300 leading-relaxed mb-6">
                  {extractText(about.secondaryAbout)}
                </p>
              ) : (
                <>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Every piece begins with a study of light and form. Whether
                    working with oil paints or digital tools, the goal remains the
                    same: to distill complex environments into their essential
                    emotional components.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    This approach allows for a fluid transition between mediums,
                    where the texture of a physical brushstroke informs the
                    precision of a digital line.
                  </p>
                </>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative bg-slate-800 rounded-lg overflow-hidden">
                {about?.secondaryImage ? (
                  <Image
                    src={about.secondaryImage}
                    alt="Process 1"
                    fill
                    className="object-cover opacity-80"
                  />
                ) : (
                  <Image
                    src="/artwork/surf1.JPG"
                    alt="Process 1"
                    fill
                    className="object-cover opacity-80"
                  />
                )}
              </div>
              <div className="aspect-square relative bg-slate-800 rounded-lg overflow-hidden translate-y-8">
                <Image
                  src="/artwork/beach1.png"
                  alt="Process 2"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16" id="contact">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact</h2>
            <div className="flex gap-8">
              <a
                href="mailto:theresa@kennishart.com"
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors"
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
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors"
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
          <p className="text-slate-400 text-sm">© 2025 Theresa Kennish</p>
        </div>
      </footer>
    </div>
  );
}
