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
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ),
)
