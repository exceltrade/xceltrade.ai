import { defineType, defineField } from "sanity";

export const pageHome = defineType({
  name: "pageHome",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      initialValue: "Modernizing trade operations for ambitious teams",
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      rows: 3,
      initialValue:
        "XcelTrade helps enterprises streamline workflows, reduce risk, and unlock new growth in complex markets.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      initialValue: "Book a strategy call",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA Link",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      initialValue: "Download capabilities deck",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Secondary CTA Link",
      type: "string",
      initialValue: "/deck",
    }),

    // Value props
    defineField({
      name: "valueProps",
      title: "Value Props",
      type: "array",
      of: [
        defineField({
          name: "valueProp",
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description", rows: 3 },
          ],
        }),
      ],
      initialValue: [
        {
          _key: "vp1",
          title: "Operational clarity",
          description:
            "Get a single source of truth across deals, risk, and execution so teams move with confidence.",
        },
        {
          _key: "vp2",
          title: "Faster decisions",
          description:
            "Surface the right data at the right time so leaders can act in hours, not weeks.",
        },
        {
          _key: "vp3",
          title: "Scalable foundations",
          description:
            "Design processes and systems that grow with your book of business, not against it.",
        },
      ],
    }),

    // Services
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        defineField({
          name: "service",
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Service Title" },
            { name: "description", type: "text", title: "Description", rows: 3 },
          ],
        }),
      ],
      initialValue: [
        {
          _key: "svc1",
          title: "Process and workflow design",
          description:
            "Map, redesign, and operationalize critical trade workflows across teams and systems.",
        },
        {
          _key: "svc2",
          title: "Data and reporting foundations",
          description:
            "Define the metrics, models, and pipelines that power reliable decision-making.",
        },
        {
          _key: "svc3",
          title: "Technology and vendor strategy",
          description:
            "Evaluate, select, and implement tools that actually fit your operating reality.",
        },
      ],
    }),

    // CTA section
    defineField({
      name: "ctaHeadline",
      title: "CTA Headline",
      type: "string",
      initialValue: "Ready to modernize your trade operations?",
    }),
    defineField({
      name: "ctaSubheadline",
      title: "CTA Subheadline",
      type: "text",
      rows: 3,
      initialValue:
        "Let’s map your current state, identify the friction, and design a path to scalable execution.",
    }),
    defineField({
      name: "ctaButtonLabel",
      title: "CTA Button Label",
      type: "string",
      initialValue: "Schedule a working session",
    }),
    defineField({
      name: "ctaButtonHref",
      title: "CTA Button Link",
      type: "string",
      initialValue: "/contact",
    }),
  ],
});
