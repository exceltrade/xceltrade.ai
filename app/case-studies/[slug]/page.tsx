import { sanityClient } from "../../../lib/sanity.client";
import { groq } from "next-sanity";

export default async function CaseStudyDetailPage({ params }) {
  const query = groq`*[_type == "caseStudy" && slug.current == $slug][0]{
    clientName,
    title,
    summary,
    impactMetrics,
    body
  }`;

  const cs = await sanityClient.fetch(query, { slug: params.slug });

  if (!cs) {
    return <div className="max-w-4xl mx-auto mt-24 px-8">Case study not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold text-slate-900">{cs.title}</h1>
      <p className="mt-2 text-slate-500">{cs.clientName}</p>
      <p className="mt-6 text-slate-600">{cs.summary}</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cs.impactMetrics?.map((m) => (
          <div key={m._key} className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-3xl font-bold text-indigo-600">{m.value}</div>
            <div className="mt-2 text-slate-700">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 prose prose-slate">
        {cs.body?.map((block) => (
          <p key={block._key}>{block.children?.[0]?.text}</p>
        ))}
      </div>
    </div>
  );
}
