// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  srcDir: 'src/',

  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },

  ui: {
    icons: ['heroicons', 'simple-icons', 'ph'],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
