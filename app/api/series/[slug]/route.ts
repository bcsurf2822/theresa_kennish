import { NextResponse } from "next/server";
import { client, writeClient } from "@/sanity/client";

const SERIES_BY_SLUG_QUERY = `*[_type == "series" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  "coverImage": coverImage.asset->url,
  order
}`;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const series = await client.fetch(SERIES_BY_SLUG_QUERY, { slug });

    if (!series) {
      return NextResponse.json(
        { error: "Series not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(series);
  } catch (error) {
    console.error("[api/series/[slug]-GET] Error fetching series:", error);
    return NextResponse.json(
      { error: "Failed to fetch series" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Find the series by slug to get its _id
    const existingSeries = await client.fetch(
      `*[_type == "series" && slug.current == $slug][0]{ _id }`,
      { slug }
    );

    if (!existingSeries) {
      return NextResponse.json(
        { error: "Series not found" },
        { status: 404 }
      );
    }

    const formData = await request.formData();
    const title = formData.get("title") as string;
    const newSlug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    const order = parseInt(formData.get("order") as string) || 0;
    const coverImage = formData.get("coverImage") as File | null;

    const updates: Record<string, unknown> = {};

    if (title) updates.title = title;
    if (newSlug) updates.slug = { _type: "slug", current: newSlug };
    if (description !== null) updates.description = description;
    if (formData.has("order")) updates.order = order;

    if (coverImage && coverImage.size > 0) {
      const imageBuffer = Buffer.from(await coverImage.arrayBuffer());
      const uploadedAsset = await writeClient.assets.upload("image", imageBuffer, {
        filename: coverImage.name,
        contentType: coverImage.type,
      });
      updates.coverImage = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: uploadedAsset._id,
        },
      };
    }

    const result = await writeClient.patch(existingSeries._id).set(updates).commit();
    console.log("[api/series/[slug]-PUT] Updated series:", result._id);

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error("[api/series/[slug]-PUT] Error updating series:", error);
    return NextResponse.json(
      { error: "Failed to update series" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Find the series by slug to get its _id
    const existingSeries = await client.fetch(
      `*[_type == "series" && slug.current == $slug][0]{ _id }`,
      { slug }
    );

    if (!existingSeries) {
      return NextResponse.json(
        { error: "Series not found" },
        { status: 404 }
      );
    }

    await writeClient.delete(existingSeries._id);
    console.log("[api/series/[slug]-DELETE] Deleted series:", existingSeries._id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/series/[slug]-DELETE] Error deleting series:", error);
    return NextResponse.json(
      { error: "Failed to delete series" },
      { status: 500 }
    );
  }
}
