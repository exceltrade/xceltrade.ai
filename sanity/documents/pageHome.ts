import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageHome",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "AI-Enabled Modernization for Regulated Enterprises"
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      initialValue:
        "XcelTrade partners with healthcare, education, and scientific organizations to modernize legacy platforms with AI, cloud, and workflow automation."
    }),
    defineField({
      name: "heroCtaLabel",
      title: "Hero CTA Label",
      type: "string",
      initialValue: "Schedule a Consultation"
    }),
    defineField({
      name: "metrics",
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
      ],
      initialValue: [
        {
          _key: "m1",
          label: "Submission cycle time reduced via AI automation",
          value: "85%"
        },
        {
          _key: "m2",
          label: "Faster case resolution through automated data extraction",
          value: "35%"
        },
        {
          _key: "m3",
          label: "Customer satisfaction increase on CMS federal platform",
          value: "25%"
        }
      ]
    }),
    defineField({
      name: "servicesIntro",
      title: "Services Intro",
      type: "text",
      initialValue:
        "We design and deliver AI-enabled platforms, cloud transformations, and workflow automation programs across regulated industries."
    })
  ]
});
