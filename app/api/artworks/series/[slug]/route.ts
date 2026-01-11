import { NextResponse } from "next/server";
import { client } from "@/sanity/client";

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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const artworks = await client.fetch(ARTWORKS_BY_SERIES_QUERY, { slug });
    return NextResponse.json(artworks);
  } catch (error) {
    console.error("[api/artworks/series/[slug]-GET] Error fetching artworks:", error);
    return NextResponse.json(
      { error: "Failed to fetch artworks for series" },
      { status: 500 }
    );
  }
}
