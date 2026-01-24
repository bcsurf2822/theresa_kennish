import { NextResponse } from "next/server";
import { client, writeClient } from "@/sanity/client";

const SERIES_QUERY = `*[_type == "series"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  "coverImage": coverImage.asset->url,
  order
}`;

export async function GET() {
  try {
    const series = await client.fetch(SERIES_QUERY);
    return NextResponse.json(series);
  } catch (error) {
    console.error("[api/series-GET] Error fetching series:", error);
    return NextResponse.json(
      { error: "Failed to fetch series" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    const order = parseInt(formData.get("order") as string) || 0;
    const coverImage = formData.get("coverImage") as File | null;

    if (!title || !slug) {
      return NextResponse.json(
        { error: "Title and slug are required" },
        { status: 400 }
      );
    }

    let coverImageAsset = null;
    if (coverImage && coverImage.size > 0) {
      const imageBuffer = Buffer.from(await coverImage.arrayBuffer());
      const uploadedAsset = await writeClient.assets.upload("image", imageBuffer, {
        filename: coverImage.name,
        contentType: coverImage.type,
      });
      coverImageAsset = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: uploadedAsset._id,
        },
      };
    }

    const doc = {
      _type: "series",
      title,
      slug: { _type: "slug", current: slug },
      description: description || "",
      order,
      ...(coverImageAsset && { coverImage: coverImageAsset }),
    };

    const result = await writeClient.create(doc);
    console.log("[api/series-POST] Created series:", result._id);

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error("[api/series-POST] Error creating series:", error);
    return NextResponse.json(
      { error: "Failed to create series" },
      { status: 500 }
    );
  }
}
