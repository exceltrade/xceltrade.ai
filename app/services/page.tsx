import { sanityClient } from "../../lib/sanity.client";
import { groq } from "next-sanity";

export default async function ServicesPage() {
  const services = await sanityClient.fetch(
    groq`*[_type == "service"]{
      title,
      shortDescription,
      "slug": slug.current
    }`
  );

  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold text-slate-900">Our Services</h1>
      <p className="mt-4 text-slate-600">
        Explore how XcelTrade helps regulated enterprises modernize platforms with AI, cloud, and workflow automation.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
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
    </div>
  );
}
