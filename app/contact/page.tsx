export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>

      <p className="mt-4 text-slate-600">
        For inquiries, consultations, or partnership opportunities, reach out anytime.
      </p>

      <form className="mt-10 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="border px-4 py-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border px-4 py-3 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="border px-4 py-3 rounded-lg h-32"
        />

        <button
          type="button"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
