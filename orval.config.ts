import { defineConfig } from 'orval'

// https://orval.dev/reference/configuration/overview
export default defineConfig({
  accounts: {
    input: {
      target: 'https://api.innohassle.ru/accounts/staging-v0/openapi.json',
      validation: false,
    },
    output: {
      mode: 'single',
      target: './src/api/accounts/__generated__.ts',
      client: 'vue-query',
      prettier: true,
      override: {
        mutator: {
          path: './src/api/accounts/axios.ts',
          name: 'axiosQuery',
        },
        query: {
          queryKey: {
            path: './src/api/accounts/query.ts',
            name: 'queryKeyMutator',
          },
        },
      },
    },
    hooks: {
      afterAllFilesWrite: {
        command: 'pnpm run lint:fix:generated',
        injectGeneratedDirsAndFiles: false,
      },
    },
  },
  events: {
    input: {
      target: 'https://api.innohassle.ru/events/staging-v0/openapi.json',
      validation: false,
    },
    output: {
      mode: 'single',
      target: './src/api/events/__generated__.ts',
      client: 'vue-query',
      prettier: true,
      override: {
        mutator: {
          path: './src/api/events/axios.ts',
          name: 'axiosQuery',
        },
        query: {
          queryKey: {
            path: './src/api/events/query.ts',
            name: 'queryKeyMutator',
          },
        },
      },
    },
    hooks: {
      afterAllFilesWrite: {
        command: 'pnpm run lint:fix:generated',
        injectGeneratedDirsAndFiles: false,
      },
    },
  },
  search: {
    input: {
      target: 'https://api.innohassle.ru/search/staging-v0/openapi.json',
      validation: false,
    },
    output: {
      mode: 'single',
      target: './src/api/search/__generated__.ts',
      client: 'vue-query',
      prettier: true,
      override: {
        mutator: {
          path: './src/api/search/axios.ts',
          name: 'axiosQuery',
        },
        query: {
          queryKey: {
            path: './src/api/search/query.ts',
            name: 'queryKeyMutator',
          },
        },
      },
    },
    hooks: {
      afterAllFilesWrite: {
        command: 'pnpm run lint:fix:generated',
        injectGeneratedDirsAndFiles: false,
      },
    },
  },
})
