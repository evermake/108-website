import type createClient from 'openapi-fetch'

export const FETCH_CLIENT_INJECTION_KEY = Symbol('fetch-client')

// eslint-disable-next-line ts/no-empty-object-type
export function useFetchClient<T extends {}>() {
  return inject(FETCH_CLIENT_INJECTION_KEY)! as ReturnType<typeof createClient<T>>
}
