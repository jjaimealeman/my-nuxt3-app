// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import Inspector from "vite-plugin-vue-inspector"

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  vite: {
    plugins: [
      Inspector({
        appendTo: "entry.mjs",
        enabled: true,
        toggleButtonVisibility: "always",
      })
    ]
  }
})
