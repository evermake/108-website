import { tokensGenerateMyToken } from '~/api/accounts/__generated__'

export const ACCESS_TOKEN_KEY = 'accounts-access-token'

const tokenRequest = {
  promise: null as Promise<string | null> | null,
}

export function readMyAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function invalidateMyAccessToken() {
  // Check if the token is already removed
  const prevToken = readMyAccessToken()
  if (!prevToken)
    return false

  localStorage.removeItem(ACCESS_TOKEN_KEY)
  return true
}

export async function refreshMyAccessToken() {
  try {
    if (!tokenRequest.promise) {
      // Deduplicate requests to refresh the token
      tokenRequest.promise = tokensGenerateMyToken().then((response) => {
        localStorage.setItem(ACCESS_TOKEN_KEY, response.access_token)
        return response.access_token
      })
    }
    return await tokenRequest.promise
  }
  catch {
    return null
  }
}

export async function getMyAccessToken() {
  // Check if the token is already stored
  const token = readMyAccessToken()
  if (token)
    return token

  // Request a new token
  return await refreshMyAccessToken()
}
