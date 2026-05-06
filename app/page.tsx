import { sanityClient } from "../lib/sanity.client";
import { groq } from "next-sanity";
import Hero from "../components/Hero";
import MetricsSection from "../components/MetricsSection";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";

export default async function HomePage() {
  const query = groq`*[_type == "pageHome"][0]{
    heroTitle,
    heroSubtitle,
    heroCtaLabel,
    metrics,
    servicesIntro
  }`;

  const data = await sanityClient.fetch(query);

  return (
    <main className="flex flex-col gap-24">
      <Hero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        ctaLabel={data.heroCtaLabel}
      />

      <MetricsSection metrics={data.metrics} />

      <ServicesSection intro={data.servicesIntro} />

      <CTASection />
    </main>
  );
}
