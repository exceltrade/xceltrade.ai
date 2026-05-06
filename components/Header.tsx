"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="XcelTrade Logo" width={160} height={40} />
        </Link>

        <nav className="hidden md:flex gap-8 text-slate-700 font-medium">
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-slate-700">
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}
