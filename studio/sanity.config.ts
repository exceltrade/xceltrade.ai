import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

// IMPORTANT: use the real schema folder your Next.js site uses
import schema from "../sanity/schema";

export default defineConfig({
  name: "default",
  title: "XcelTrade Studio",

  projectId: "xyibzmqx",
  dataset: "production",

  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schema,
  },
});
