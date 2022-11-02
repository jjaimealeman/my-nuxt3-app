/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  varients: {
    extend: {},
  },
  plugins: [],
}
