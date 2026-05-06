import { sanityClient } from "../../lib/sanity.client";
import { groq } from "next-sanity";

export default async function CaseStudiesPage() {
  const caseStudies = await sanityClient.fetch(
    groq`*[_type == "caseStudy"]{
      clientName,
      title,
      summary,
      "slug": slug.current
    }`
  );

  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold text-slate-900">Case Studies</h1>
      <p className="mt-4 text-slate-600">
        Real-world examples of AI modernization, workflow automation, and cloud transformation.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {caseStudies.map((c) => (
          <a
            key={c.slug}
            href={`/case-studies/${c.slug}`}
            className="p-8 border rounded-xl hover:shadow-lg transition bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-slate-900">{c.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{c.clientName}</p>
            <p className="mt-4 text-slate-600">{c.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
