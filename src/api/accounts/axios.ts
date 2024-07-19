import axios, { type AxiosRequestConfig } from 'axios'

// Create Axios client
export const accountsAxios = axios.create()

// Method to query API and receive 'data' field on success
export function axiosQuery<T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> {
  return accountsAxios<T>({
    withCredentials: true, // Allow cookies
    ...config,
    ...options,
  }).then(({ data }) => data)
}
