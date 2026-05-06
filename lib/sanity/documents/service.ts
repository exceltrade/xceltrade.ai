import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text"
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: true
    })
  ]
});
