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
    extend: {
      colors: {
        'body': '#001c24'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
    },
  },
  varients: {
    extend: {},
  },
  plugins: [],
}
