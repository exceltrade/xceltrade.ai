import Image from "next/image";
import { sanityClient } from "@/lib/sanity.client";
import { homePageQuery } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity.image"; // small helper, see below

type ValueProp = {
  _key: string;
  title: string;
  description: string;
};

type Service = {
  _key: string;
  title: string;
  description: string;
};

type HomePageData = {
  headline: string;
  subheadline: string;
  heroImage?: any;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  valueProps: ValueProp[];
  services: Service[];
  ctaHeadline: string;
  ctaSubheadline: string;
  ctaButtonLabel: string;
  ctaButtonHref: string;
};

async function getHomePageData(): Promise<HomePageData> {
  const data = await sanityClient.fetch(homePageQuery);
  return data;
}

export default async function HomePage() {
  const data = await getHomePageData();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:py-28">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              XcelTrade
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {data.headline}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {data.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={data.primaryCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
              >
                {data.primaryCtaLabel}
              </a>
              <a
                href={data.secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                {data.secondaryCtaLabel}
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative h-72 w-full overflow-hidden rounded-3xl bg-slate-100 shadow-lg sm:h-80 lg:h-96">
              {data.heroImage ? (
                <Image
                  src={urlForImage(data.heroImage).width(900).height(700).url()}
                  alt="XcelTrade hero"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
                  Upload a hero image in Sanity
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Why teams work with XcelTrade
            </h2>
            <p className="max-w-xl text-sm text-slate-600">
              Designed for leaders who need clarity across operations, risk, and growth—without adding more noise.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {data.valueProps?.map((vp) => (
              <div
                key={vp._key}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {vp.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {vp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Services
            </h2>
            <p className="max-w-xl text-sm text-slate-600">
              Engagements designed to move from slideware to execution—quickly, with your teams in the loop.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {data.services?.map((svc) => (
              <div
                key={svc._key}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              {data.ctaHeadline}
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              {data.ctaSubheadline}
            </p>
            <a
              href={data.ctaButtonHref}
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-400"
            >
              {data.ctaButtonLabel}
            </a>
          </div>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} XcelTrade. All rights reserved.</span>
          <span>Built with Sanity & Next.js</span>
        </div>
      </footer>
    </div>
  );
}
