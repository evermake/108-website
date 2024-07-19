export function queryKeyMutator(_: any, { url }: { url: string, queryOptions: unknown }) {
  return ['ACCOUNTS', url] as const
}
