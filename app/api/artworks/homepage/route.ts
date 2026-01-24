import { NextResponse } from "next/server";
import { client } from "@/sanity/client";

const HOMEPAGE_ARTWORKS_QUERY = `*[_type == "artwork" && showOnHomepage == true] | order(order asc) {
  _id,
  title,
  description,
  "image": image.asset->url,
  "imageAlt": image.alt,
  order,
  "series": series->{
    _id,
    title,
    "slug": slug.current
  }
}`;

export async function GET() {
  try {
    const artworks = await client.fetch(HOMEPAGE_ARTWORKS_QUERY);
    return NextResponse.json(artworks);
  } catch (error) {
    console.error("[api/artworks/homepage-GET] Error fetching homepage artworks:", error);
    return NextResponse.json(
      { error: "Failed to fetch homepage artworks" },
      { status: 500 }
    );
  }
}
