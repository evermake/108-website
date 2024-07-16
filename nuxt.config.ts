// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
  },

  modules: [
    /**
     * Nuxt UI automatically installs the following modules:
     * - @nuxtjs/tailwindcss
     * - @nuxtjs/color-mode
     * - nuxt-icon
     *
     * No need to install them.
     *
     * @see https://ui.nuxt.com/getting-started/installation#modules
     */
    '@nuxt/ui',

    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
  ],

  srcDir: 'src/',

  devtools: {
    enabled: true,
  },

  css: [
    '~/assets/css/main.css',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },

  ui: {
    icons: [
      'heroicons',
      'simple-icons',
      'ph',
    ],
  },

  tailwindcss: {
    viewer: true,
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
  },

  eslint: {
    config: {
      // We use Anthony Fu's preset, so we need to disable this.
      standalone: false,
    },
  },
})
