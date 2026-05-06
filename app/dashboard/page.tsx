import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    return (
      <div className="max-w-xl mx-auto mt-32 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Access Denied</h1>
        <p className="mt-4 text-slate-600">
          You must be an admin to view this page.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block text-indigo-600 font-semibold"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-24 px-8">
      <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
      <p className="mt-4 text-slate-600">
        Welcome, Ahsan. You are logged in as <strong>CEO & President</strong>.
      </p>

      <div className="mt-10 grid gap-6">
        <a
          href="/studio"
          className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50"
        >
          <h2 className="text-xl font-semibold text-slate-900">
            Open Sanity Studio
          </h2>
          <p className="mt-2 text-slate-600">
            Edit all website content without redeploying.
          </p>
        </a>
      </div>
    </div>
  );
}
