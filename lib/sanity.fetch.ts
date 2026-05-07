import { sanityClient } from "./sanity.client"

export async function sanityFetch<QueryResponse>(
  query: string,
  params: Record<string, any> = {}
): Promise<QueryResponse> {
  return sanityClient.fetch(query, params)
}
