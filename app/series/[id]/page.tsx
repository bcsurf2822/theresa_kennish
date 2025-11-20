import Image from "next/image";
import Link from "next/link";

// Mock Data for Series
const seriesData = {
  "oceanic-horizons": {
    title: "Oceanic Horizons",
    year: "2024",
    description:
      "A series exploring the movement of water through texture and light, capturing the ephemeral nature of the coast.",
    artworks: [
      {
        src: "/artwork/minimal_geometric.png",
        title: "Tidal Shift",
        dimensions: "Oil on Canvas, 24x24",
        aspect: "square",
      },
      {
        src: "/artwork/waves1.png",
        title: "Horizon Line",
        dimensions: "Oil on Canvas, 60x20",
        aspect: "wide",
      },
      {
        src: "/artwork/surf1.JPG",
        title: "Blue Velocity",
        dimensions: "Digital, 30x40",
        aspect: "portrait",
      },
      {
        src: "/artwork/bold_abstract.png",
        title: "Deep Dive",
        dimensions: "Mixed Media, 40x40",
        aspect: "square",
      },
      {
        src: "/artwork/surf2.JPG",
        title: "Aqua Flow",
        dimensions: "Digital, 24x36",
        aspect: "portrait",
      },
      {
        src: "/artwork/beach1.png",
        title: "Sand Data",
        dimensions: "Digital, 30x30",
        aspect: "square",
      },
    ],
  },
  "coastal-rhythms": {
    title: "Coastal Rhythms",
    year: "2023",
    description:
      "Capturing the raw energy of the Pacific coast through expressive brushwork and texture. This collection focuses on the movement of water and the stillness of stone.",
    artworks: [
      {
        src: "/artwork/surf1.JPG",
        title: "Morning Break",
        dimensions: "Oil on Canvas, 36x48",
        aspect: "landscape",
      },
      {
        src: "/artwork/surf1.JPG",
        title: "Cresting Wave",
        dimensions: "Oil on Canvas, 30x40",
        aspect: "portrait",
      },
      {
        src: "/artwork/beach1.png",
        title: "Sand & Sky",
        dimensions: "Oil on Canvas, 24x24",
        aspect: "square",
      },
      {
        src: "/artwork/row1.jpg",
        title: "Rocky Shore",
        dimensions: "Impasto, 24x36",
        aspect: "portrait",
      },
      {
        src: "/artwork/surf2.JPG",
        title: "Deep Water",
        dimensions: "Oil on Canvas, 40x40",
        aspect: "square",
      },
      {
        src: "/artwork/waves1.png",
        title: "Pacific Panorama",
        dimensions: "Oil on Canvas, 60x24",
        aspect: "wide",
      },
      {
        src: "/artwork/jetty_ocean.jpg",
        title: "The Jetty",
        dimensions: "Oil on Canvas, 30x40",
        aspect: "landscape",
      },
    ],
  },
  "urban-echoes": {
    title: "Urban Echoes",
    year: "2022",
    description:
      "Reflections on city life and architecture. Finding silence in the noise and structure in the chaos of urban environments.",
    artworks: [
      {
        src: "/artwork/ocean_city.jpg",
        title: "City Shores",
        dimensions: "Photography, 24x36",
        aspect: "landscape",
      },
      {
        src: "/artwork/row1.jpg",
        title: "Vertical Horizon",
        dimensions: "Photography, 12x36",
        aspect: "tall",
      },
      {
        src: "/artwork/minimal_geometric.png",
        title: "Structure 01",
        dimensions: "Mixed Media, 24x24",
        aspect: "square",
      },
      {
        src: "/artwork/row1.jpg",
        title: "Concrete Texture",
        dimensions: "Photography, 24x36",
        aspect: "portrait",
      },
      {
        src: "/artwork/abstract_watercolor.png",
        title: "Urban Rain",
        dimensions: "Watercolor, 18x24",
        aspect: "portrait",
      },
      {
        src: "/artwork/bold_abstract.png",
        title: "Night Lights",
        dimensions: "Digital, 30x30",
        aspect: "square",
      },
    ],
  },
};

export default function SeriesPage({ params }: { params: { id: string } }) {
  const series = seriesData[params.id as keyof typeof seriesData];

  if (!series) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Series Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
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
            href="/"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Series Header */}
      <header className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-slate-100 rounded-full text-slate-600">
          Series Collection • {series.year}
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900">
          {series.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {series.description}
        </p>
      </header>

      {/* Masonry Grid */}
      <main className="max-w-[1800px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {series.artworks.map((art, index) => {
            // Dynamic span classes based on aspect ratio
            const spanClass =
              art.aspect === "wide"
                ? "md:col-span-2 row-span-1"
                : art.aspect === "tall"
                ? "md:col-span-1 row-span-2"
                : art.aspect === "portrait"
                ? "row-span-2"
                : "col-span-1 row-span-1";

            return (
              <div
                key={index}
                className={`relative group rounded-lg overflow-hidden bg-slate-100 ${spanClass}`}
              >
                <Image
                  src={art.src}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-lg font-bold">{art.title}</h3>
                  <p className="text-sm opacity-90">{art.dimensions}</p>
                </div>
              </div>
            );
          })}
        </div>
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
