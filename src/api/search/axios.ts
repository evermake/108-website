import axios, { type AxiosRequestConfig } from 'axios'

// Create Axios client
export const searchAxios = axios.create()

// Method to query API and receive 'data' field on success
export function axiosQuery<T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> {
  return searchAxios<T>({
    ...config,
    ...options,
  }).then(({ data }) => data)
}
