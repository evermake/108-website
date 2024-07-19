export const IS_AUTHENTICATED_KEY = 'accounts-authenticated'

export function getIsAuthenticated() {
  return localStorage.getItem(IS_AUTHENTICATED_KEY) === '1'
}

export function setIsAuthenticated(value: boolean) {
  if (value) {
    localStorage.setItem(IS_AUTHENTICATED_KEY, '1')
  }
  else {
    localStorage.removeItem(IS_AUTHENTICATED_KEY)
  }
}

export function useIsAuthenticated() {
  return useLocalStorage<boolean>(IS_AUTHENTICATED_KEY, false, {
    writeDefaults: false,
    mergeDefaults: false,
  })
}
