
import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "xyibzmqx", // your projectId
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
