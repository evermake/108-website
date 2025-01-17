import axios, { type AxiosRequestConfig } from 'axios'
import {
  getMyAccessToken,
  invalidateMyAccessToken,
} from '~/api/accounts/access-token'

// Create Axios client
export const eventsAxios = axios.create()

// Add access token to requests
eventsAxios.interceptors.request.use(async (request) => {
  const token = await getMyAccessToken()
  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }
  return request
})

// Handle auth errors
eventsAxios.interceptors.response.use(
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
  return eventsAxios<T>({
    ...config,
    ...options,
  }).then(({ data }) => data)
}
