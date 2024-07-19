import { VueQueryPlugin } from '@tanstack/vue-query'
import { customQueryClient } from '~/api/query-client'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(VueQueryPlugin, {
    queryClient: customQueryClient,
    enableDevtoolsV6Plugin: true,
  })
})
