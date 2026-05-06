import { sanityClient } from "../lib/sanity.client";
import { groq } from "next-sanity";

export default async function ServicesSection({ intro }) {
  const services = await sanityClient.fetch(
    groq`*[_type == "service" && featured == true][0...3]{
      title,
      shortDescription,
      "slug": slug.current
    }`
  );

  return (
    <section className="max-w-7xl mx-auto px-6 mt-24">
      <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
      <p className="mt-4 text-slate-600 max-w-2xl">{intro}</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`/services/${s.slug}`}
            className="p-8 border rounded-xl hover:shadow-lg transition bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-3 text-slate-600">{s.shortDescription}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
