export function queryKeyMutator(_: any, { url }: { url: string, queryOptions: unknown }) {
  return ['EVENTS', url] as const
}
