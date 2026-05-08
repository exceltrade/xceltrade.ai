import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "pageHome"][0]{
    headline,
    subheadline,
    heroImage,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    valueProps[]{
      _key,
      title,
      description
    },
    services[]{
      _key,
      title,
      description
    },
    ctaHeadline,
    ctaSubheadline,
    ctaButtonLabel,
    ctaButtonHref
  }
`;

