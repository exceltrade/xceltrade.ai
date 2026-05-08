import { StructureBuilder } from "sanity/desk";

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("pageHome").title("Home Page"),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("caseStudy").title("Case Studies"),
      S.documentTypeListItem("siteSettings").title("Site Settings"),
    ]);
