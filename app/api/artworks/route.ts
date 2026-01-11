import { NextRequest, NextResponse } from "next/server";
import { client, writeClient } from "@/sanity/client";

const ARTWORKS_QUERY = `*[_type == "artwork"] | order(order asc) {
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

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const showOnHomepage = searchParams.get("homepage");
    const seriesSlug = searchParams.get("series");

    let query = ARTWORKS_QUERY;
    const params: Record<string, string | boolean> = {};

    if (showOnHomepage === "true") {
      query = `*[_type == "artwork" && showOnHomepage == true] | order(order asc) {
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
    }

    if (seriesSlug) {
      query = `*[_type == "artwork" && series->slug.current == $seriesSlug] | order(order asc) {
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
      params.seriesSlug = seriesSlug;
    }

    const artworks = await client.fetch(query, params);
    return NextResponse.json(artworks);
  } catch (error) {
    console.error("[api/artworks-GET] Error fetching artworks:", error);
    return NextResponse.json(
      { error: "Failed to fetch artworks" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const seriesId = formData.get("seriesId") as string;
    const showOnHomepage = formData.get("showOnHomepage") === "true";
    const order = parseInt(formData.get("order") as string) || 0;
    const image = formData.get("image") as File | null;

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    if (!image || image.size === 0) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }

    // Upload the image
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    const uploadedAsset = await writeClient.assets.upload("image", imageBuffer, {
      filename: image.name,
      contentType: image.type,
    });

    const doc: Record<string, unknown> = {
      _type: "artwork",
      title,
      description: description || "",
      showOnHomepage,
      order,
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: uploadedAsset._id,
        },
      },
    };

    // Add series reference if provided
    if (seriesId) {
      doc.series = {
        _type: "reference",
        _ref: seriesId,
      };
    }

    const result = await writeClient.create(doc);
    console.log("[api/artworks-POST] Created artwork:", result._id);

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error("[api/artworks-POST] Error creating artwork:", error);
    return NextResponse.json(
      { error: "Failed to create artwork" },
      { status: 500 }
    );
  }
}
