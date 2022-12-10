// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import Inspector from "vite-plugin-vue-inspector"

export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  modules: ['nuxt-icon'],
  css: ['~/assets/css/main.css'],
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
