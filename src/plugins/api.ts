import { accountsAxios } from '~/api/accounts/axios'
import { eventsAxios } from '~/api/events/axios'
import { searchAxios } from '~/api/search/axios'

export default defineNuxtPlugin(({ $config }) => {
  accountsAxios.defaults.baseURL = $config.public.accountsApiUrl
  eventsAxios.defaults.baseURL = $config.public.eventsApiUrl
  searchAxios.defaults.baseURL = $config.public.searchApiUrl
})
