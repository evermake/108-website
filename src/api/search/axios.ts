import axios, { type AxiosRequestConfig } from 'axios'
import { getMyAccessToken, invalidateMyAccessToken } from '~/api/accounts/access-token'

// Create Axios client
export const searchAxios = axios.create()

// Add access token to requests
searchAxios.interceptors.request.use(async (request) => {
  const token = await getMyAccessToken()
  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }
  return request
})

// Handle auth errors
searchAxios.interceptors.response.use(
  response => response,
  async (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      // Unauthorized error
      invalidateMyAccessToken()
      return Promise.reject(error)
    }
  },
)

// Method to query API and receive 'data' field on success
export function axiosQuery<T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> {
  return searchAxios<T>({
    ...config,
    ...options,
  }).then(({ data }) => data)
}
