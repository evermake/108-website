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
      },

      formatters: true,

      typescript: true,
      vue: true,
    },
    tailwind.configs['flat/recommended'],
    {
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ),
)
