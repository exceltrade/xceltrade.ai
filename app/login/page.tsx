"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard"
    });
  }

  return (
    <div className="max-w-md mx-auto mt-32 px-8 py-10 border rounded-xl shadow-sm bg-white">
      <h1 className="text-2xl font-bold text-center text-slate-900">
        Admin Login
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
        <input
          type="email"
          placeholder="Email"
          className="border px-4 py-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border px-4 py-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
