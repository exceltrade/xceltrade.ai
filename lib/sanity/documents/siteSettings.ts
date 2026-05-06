import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      initialValue: "XcelTrade"
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "AI-Enabled Modernization for Regulated Enterprises"
    }),
    defineField({
      name: "ceoName",
      title: "CEO Name",
      type: "string",
      initialValue: "Ahsan"
    }),
    defineField({
      name: "ceoTitle",
      title: "CEO Title",
      type: "string",
      initialValue: "CEO & President, XcelTrade"
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      initialValue: "saeeann@gmail.com"
    })
  ]
});
