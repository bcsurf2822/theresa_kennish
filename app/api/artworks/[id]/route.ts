import { NextResponse } from "next/server";
import { client, writeClient } from "@/sanity/client";

const ARTWORK_BY_ID_QUERY = `*[_type == "artwork" && _id == $id][0] {
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
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const artwork = await client.fetch(ARTWORK_BY_ID_QUERY, { id });

    if (!artwork) {
      return NextResponse.json(
        { error: "Artwork not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(artwork);
  } catch (error) {
    console.error("[api/artworks/[id]-GET] Error fetching artwork:", error);
    return NextResponse.json(
      { error: "Failed to fetch artwork" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if artwork exists
    const existingArtwork = await client.fetch(
      `*[_type == "artwork" && _id == $id][0]{ _id }`,
      { id }
    );

    if (!existingArtwork) {
      return NextResponse.json(
        { error: "Artwork not found" },
        { status: 404 }
      );
    }

    const formData = await request.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const seriesId = formData.get("seriesId") as string;
    const showOnHomepage = formData.get("showOnHomepage");
    const order = formData.get("order");
    const image = formData.get("image") as File | null;

    const updates: Record<string, unknown> = {};

    if (title) updates.title = title;
    if (description !== null) updates.description = description;
    if (showOnHomepage !== null) updates.showOnHomepage = showOnHomepage === "true";
    if (order !== null) updates.order = parseInt(order as string) || 0;

    // Handle series reference
    if (seriesId) {
      updates.series = {
        _type: "reference",
        _ref: seriesId,
      };
    } else if (formData.has("seriesId") && !seriesId) {
      // Remove series reference if explicitly set to empty
      updates.series = null;
    }

    // Handle image upload if provided
    if (image && image.size > 0) {
      const imageBuffer = Buffer.from(await image.arrayBuffer());
      const uploadedAsset = await writeClient.assets.upload("image", imageBuffer, {
        filename: image.name,
        contentType: image.type,
      });
      updates.image = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: uploadedAsset._id,
        },
      };
    }

    const result = await writeClient.patch(id).set(updates).commit();
    console.log("[api/artworks/[id]-PUT] Updated artwork:", result._id);

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error("[api/artworks/[id]-PUT] Error updating artwork:", error);
    return NextResponse.json(
      { error: "Failed to update artwork" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if artwork exists
    const existingArtwork = await client.fetch(
      `*[_type == "artwork" && _id == $id][0]{ _id }`,
      { id }
    );

    if (!existingArtwork) {
      return NextResponse.json(
        { error: "Artwork not found" },
        { status: 404 }
      );
    }

    await writeClient.delete(id);
    console.log("[api/artworks/[id]-DELETE] Deleted artwork:", id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/artworks/[id]-DELETE] Error deleting artwork:", error);
    return NextResponse.json(
      { error: "Failed to delete artwork" },
      { status: 500 }
    );
  }
}
