import { useQuery } from '@tanstack/vue-query'
import type InternalsApi from '~/api/internals/api'

export function useMembers() {
  const client = useFetchClient<InternalsApi.paths>()
  return useQuery({
    queryKey: ['all-members'],
    queryFn: async () => {
      const result = await client.GET('/members')
      if (result.data) {
        return result.data
      }
      throw new Error('No data')
    },
  })
}
