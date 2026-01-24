import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

interface Series {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  coverImage: string | null;
  order: number;
}

interface Artwork {
  _id: string;
  title: string;
  description: string;
  image: string | null;
  imageAlt: string | null;
  showOnHomepage: boolean;
  order: number;
  series: {
    _id: string;
    title: string;
    slug: string;
  } | null;
}

const SERIES_BY_SLUG_QUERY = `*[_type == "series" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  "coverImage": coverImage.asset->url,
  order
}`;

const ARTWORKS_BY_SERIES_QUERY = `*[_type == "artwork" && series->slug.current == $slug] | order(order asc) {
  _id,
  title,
  description,
  "image": image.asset->url,
  "imageAlt": image.alt,
  showOnHomepage,
  order,
  "series": series->{
    _id,
    title,
    "slug": slug.current
  }
}`;

async function getSeriesBySlug(slug: string): Promise<Series | null> {
  return client.fetch(SERIES_BY_SLUG_QUERY, { slug });
}

async function getArtworksBySeries(slug: string): Promise<Artwork[]> {
  return client.fetch(ARTWORKS_BY_SERIES_QUERY, { slug });
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [series, artworks] = await Promise.all([
    getSeriesBySlug(slug),
    getArtworksBySeries(slug),
  ]);

  if (!series) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            Theresa Kennish
          </Link>
          <Link
            href="/contemporary-professional"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/contemporary-professional" className="hover:text-slate-900 transition-colors">
            Portfolio
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-medium">{series.title}</span>
        </nav>
      </div>

      {/* Series Header */}
      <header className="pt-8 pb-16 px-6 max-w-4xl mx-auto text-center">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-slate-100 rounded-full text-slate-600">
          Series Collection
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900">
          {series.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {series.description || "Explore this collection of artwork."}
        </p>
      </header>

      {/* Artwork Grid */}
      <main className="max-w-[1800px] mx-auto px-6 pb-32">
        {artworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
            {artworks.map((artwork, index) => {
              // Alternate between different grid spans for visual variety
              const spanClass =
                index % 5 === 0
                  ? "md:col-span-2 row-span-1"
                  : index % 3 === 0
                  ? "row-span-2"
                  : "col-span-1 row-span-1";

              return (
                <div
                  key={artwork._id}
                  className={`relative group rounded-lg overflow-hidden bg-slate-100 ${spanClass}`}
                >
                  {artwork.image ? (
                    <Image
                      src={artwork.image}
                      alt={artwork.imageAlt || artwork.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-lg font-bold">{artwork.title}</h3>
                    {artwork.description && (
                      <p className="text-sm opacity-90 line-clamp-2">
                        {artwork.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 text-slate-500">
            <p className="text-lg">No artworks in this series yet.</p>
            <p className="text-sm mt-2">
              Add artworks from the admin dashboard.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Theresa Kennish. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
