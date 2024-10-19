/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'avenir-bold': ['Avenir Next LT W01 Bold', 'sans-serif'],
        'avenir-demi': ['Avenir Next LT W01 Demi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

