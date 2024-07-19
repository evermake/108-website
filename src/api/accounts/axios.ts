import axios, { type AxiosRequestConfig } from 'axios'
import { getIsAuthenticated, setIsAuthenticated } from '~/api/accounts/is-authenticated'
import { customQueryClient } from '~/api/query-client'

// Create Axios client
export const accountsAxios = axios.create()

// Handle auth errors
accountsAxios.interceptors.response.use((response) => {
  if (response.request?.responseURL?.endsWith('/users/me')) {
    if (!getIsAuthenticated()) {
      // The user is now logged in
      setIsAuthenticated(true)
      customQueryClient.clear()
    }
  }
  return response
}, async (error) => {
  if (error.response.status === 401) {
    // Unauthorized error
    if (getIsAuthenticated()) {
      // The user were logged in, but the session expired.
      // Clear query cache and remove user data.
      setIsAuthenticated(false)
      customQueryClient.clear()
    }
  }
  return Promise.reject(error)
})

// Method to query API and receive 'data' field on success
export function axiosQuery<T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> {
  return accountsAxios<T>({
    withCredentials: true, // Allow cookies
    ...config,
    ...options,
  }).then(({ data }) => data)
}
