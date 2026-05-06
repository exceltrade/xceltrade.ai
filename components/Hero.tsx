export default function Hero({ title, subtitle, ctaLabel }) {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
      <h1 className="text-5xl font-bold text-slate-900 leading-tight">
        {title}
      </h1>

      <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
        {subtitle}
      </p>

      <a
        href="/contact"
        className="inline-block mt-10 bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        {ctaLabel}
      </a>
    </section>
  );
}
