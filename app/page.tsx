import { sanityFetch } from "@/lib/sanity.fetch"
import { homeQuery } from "@/lib/queries"

export default async function HomePage() {
  const data: any = await sanityFetch(homeQuery)

  return (
    <main>
      <h1>{data?.title}</h1>
      <p>{data?.subtitle}</p>

      {data?.sections?.map((section: any) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </main>
  )
}
