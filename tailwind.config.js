/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        content: 'var(--color-content)',
      }
    },

  },
  plugins: [formsPlugin],
}

