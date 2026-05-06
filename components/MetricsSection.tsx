export default function MetricsSection({ metrics }) {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {metrics?.map((m) => (
          <div
            key={m._key}
            className="p-8 bg-gray-50 rounded-xl text-center shadow-sm"
          >
            <div className="text-4xl font-bold text-indigo-600">{m.value}</div>
            <div className="mt-3 text-slate-700">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
