import { NextResponse } from "next/server";
import { client, writeClient } from "@/sanity/client";

const ABOUT_QUERY = `*[_type == "about"][0] {
  _id,
  "profileImage": profileImage.asset->url,
  bio,
  secondaryTitle,
  secondaryAbout,
  "secondaryImage": secondaryImage.asset->url
}`;

export async function GET() {
  try {
    const about = await client.fetch(ABOUT_QUERY);

    if (!about) {
      return NextResponse.json(
        { error: "About content not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(about);
  } catch (error) {
    console.error("[api/about-GET] Error fetching about:", error);
    return NextResponse.json(
      { error: "Failed to fetch about content" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    // Get existing about document
    const existingAbout = await client.fetch(`*[_type == "about"][0]{ _id }`);

    const formData = await request.formData();
    const secondaryTitle = formData.get("secondaryTitle") as string;
    const bio = formData.get("bio") as string;
    const secondaryAbout = formData.get("secondaryAbout") as string;
    const profileImage = formData.get("profileImage") as File | null;
    const secondaryImage = formData.get("secondaryImage") as File | null;

    const updates: Record<string, unknown> = {};

    if (secondaryTitle !== null) updates.secondaryTitle = secondaryTitle;

    // Handle bio as simple text block (converts plain text to Portable Text)
    if (bio !== null) {
      updates.bio = [
        {
          _type: "block",
          _key: `bio-${Date.now()}`,
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: `span-${Date.now()}`,
              text: bio,
              marks: [],
            },
          ],
        },
      ];
    }

    // Handle secondaryAbout as simple text block
    if (secondaryAbout !== null) {
      updates.secondaryAbout = [
        {
          _type: "block",
          _key: `secondary-${Date.now()}`,
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: `span-secondary-${Date.now()}`,
              text: secondaryAbout,
              marks: [],
            },
          ],
        },
      ];
    }

    // Handle profile image upload
    if (profileImage && profileImage.size > 0) {
      const imageBuffer = Buffer.from(await profileImage.arrayBuffer());
      const uploadedAsset = await writeClient.assets.upload("image", imageBuffer, {
        filename: profileImage.name,
        contentType: profileImage.type,
      });
      updates.profileImage = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: uploadedAsset._id,
        },
      };
    }

    // Handle secondary image upload
    if (secondaryImage && secondaryImage.size > 0) {
      const imageBuffer = Buffer.from(await secondaryImage.arrayBuffer());
      const uploadedAsset = await writeClient.assets.upload("image", imageBuffer, {
        filename: secondaryImage.name,
        contentType: secondaryImage.type,
      });
      updates.secondaryImage = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: uploadedAsset._id,
        },
      };
    }

    let result;
    if (existingAbout) {
      // Update existing document
      result = await writeClient.patch(existingAbout._id).set(updates).commit();
      console.log("[api/about-PUT] Updated about:", result._id);
    } else {
      // Create new about document if none exists
      const doc = {
        _type: "about",
        ...updates,
      };
      result = await writeClient.create(doc);
      console.log("[api/about-PUT] Created about:", result._id);
    }

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error("[api/about-PUT] Error updating about:", error);
    return NextResponse.json(
      { error: "Failed to update about content" },
      { status: 500 }
    );
  }
}
