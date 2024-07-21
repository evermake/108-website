import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default <Partial<Config>> {
  theme: {
    fontFamily: {
      sans: ['"Inter"', '-apple-system', 'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      mono: ['ui-monospace', '"Menlo"', '"Monaco"', '"Consolas"', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
  },

  plugins: [
    typography,
  ],
}
