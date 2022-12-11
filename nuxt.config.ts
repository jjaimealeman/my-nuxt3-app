// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import Inspector from "vite-plugin-vue-inspector"

export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon'],
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },
  vite: {
    plugins: [
      Inspector({
        appendTo: "entry.mjs",
        enabled: false,
        toggleButtonVisibility: "always",
      })
    ]
  }
})
