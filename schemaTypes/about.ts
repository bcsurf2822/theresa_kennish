import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "secondaryTitle",
      title: "Secondary Title",
      type: "string",
    }),
    defineField({
      name: "secondaryAbout",
      title: "Secondary About",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "secondaryImage",
      title: "Secondary Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      media: "profileImage",
    },
    prepare({ media }) {
      return {
        title: "About",
        media: media,
      };
    },
  },
});
