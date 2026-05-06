import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "clientName",
      title: "Client Name (or Sector)",
      type: "string"
    }),
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
      name: "summary",
      title: "Summary",
      type: "text"
    }),
    defineField({
      name: "impactMetrics",
      title: "Impact Metrics",
      type: "array",
      of: [
        defineField({
          name: "metric",
          title: "Metric",
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" }
          ]
        })
      ]
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }]
    })
  ]
});
