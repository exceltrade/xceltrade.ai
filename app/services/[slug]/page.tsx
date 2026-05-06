import { sanityClient } from "../../../lib/sanity.client";
import { groq } from "next-sanity";

export default async function ServiceDetailPage({ params }) {
  const query = groq`*[_type == "service" && slug.current == $slug][0]{
    title,
    shortDescription,
    body
  }`;

  const service = await sanityClient.fetch(query, { slug: params.slug });

  if (!service) {
    return <div className="max-w-4xl mx-auto mt-24 px-8">Service not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold text-slate-900">{service.title}</h1>
      <p className="mt-4 text-slate-600">{service.shortDescription}</p>

      <div className="mt-10 prose prose-slate">
        {service.body?.map((block) => (
          <p key={block._key}>{block.children?.[0]?.text}</p>
        ))}
      </div>
    </div>
  );
}
