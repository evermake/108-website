// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
  },

  devServer: {
    port: 3108,
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

    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],

  srcDir: 'src/',

  devtools: {
    enabled: true,
  },

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

  runtimeConfig: {
    // Override these values in .env file
    public: {
      // You can change URLs to use local or staging environments
      accountsApiUrl: 'https://api.innohassle.ru/accounts/v0',
      eventsApiUrl: 'https://api.innohassle.ru/events/v0',
      searchApiUrl: 'https://api.innohassle.ru/search/v0',

      // Should be the name of provider supported by Accounts API
      accountsAuthProvider: 'innopolis',

      // Should be the same as used by Accounts API
      accountsBotName: 'InNoHassleBot',
    },
  },

  nitro: {
    devProxy: {
      '/proxy-api': {
        target: 'https://api.innohassle.ru',
        changeOrigin: true,
        prependPath: true,
        cookiePathRewrite: {
          '/accounts/v0': '/',
        },
      },
    },
  },
})
