// @ts-check
import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        jsx: false,
      },

      vue: true,
      typescript: true,
      formatters: true,
      jsonc: true,
      markdown: true,
      yaml: true,
      regexp: true,
    },

    ...tailwind.configs['flat/recommended'],

    {
      rules: {
        // Sometimes it's easier to define a custom class.
        'tailwindcss/no-custom-classname': 'off',

        // Vue 3 officially supports fragments:
        // https://v3-migration.vuejs.org/new/fragments.html
        'vue/no-multiple-template-root': 'off',

        // To enforce "multi-attribute elements" rule:
        // https://vuejs.org/style-guide/rules-strongly-recommended.html#multi-attribute-elements
        'vue/max-attributes-per-line': ['error', {
          singleline: { max: 1 },
          multiline: { max: 1 },
        }],
      },
    },
  ),
)
