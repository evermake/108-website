export function queryKeyMutator(_: any, { url }: { url: string, queryOptions: unknown }) {
  return ['SEARCH', url] as const
}
