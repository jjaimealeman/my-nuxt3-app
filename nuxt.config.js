import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    mode: "universal",
    target: "server",

    // https://nuxtjs.org/docs/features/loading
    // loading: '@/components/LoadingBar.vue',
    // loading: {
    //     color: 'blue',
    //     height: '5px'
    // },

    windicss: {
        config: {
            attributify: true,
        },
    },
    // css: ['@/assets/fonts.css'],
    buildModules: [
        '@nuxtjs/pwa',
        'nuxt-windicss',
        'unplugin-icons/nuxt'
    ],
    windicss: {
        analyze: true
    },
    "assets": "/<rootDir>/assets",
    "public": "/<rootDir>/public",

    head: {
        // title: 'qwerty',
        // htmlAttrs: {
        //       lang: 'en'
        //     },
        meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1.0">
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            // <meta name="description" content="An optimized TailwindCSS Boilerplate for simple static HTML/CSS/JS websites." />
            // { name: 'description', content: 'A simple Nuxt3 app ... with PWA? not yet!' }
        ],
        script: [
            // <script src="https://myawesome-lib.js"></script>
            // { src: 'https://awesome-lib.js' }
        ],
        link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
            { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
        ]
    }
});

// <html lang="en">

// <meta charset="UTF-8" />
// <meta http-equiv="X-UA-Compatible" content="IE=edge" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// <title>Home | My TailwindCSS Boilerplate</title>
// <meta name="description" content="An optimized TailwindCSS Boilerplate for simple static HTML/CSS/JS websites." />
// <meta property="og:title" content="HERE YOU PUT THE TITLE WHICH YOU WANT TO BE DISPLAYED WHEN YOUR PAGE IS LINKED TO" />
// <meta property="og:type" content="article" />
// <meta property="og:url" content="YOUR PAGES URL" />
// <meta property="og:image" content="./assets/images/og-image-facebook-1200x630.png" />
// <meta property="og:image:width" content="1200" />
// <meta property="og:image:height" content="630" />
// <meta property="og:site_name" content="SITE NAME" />
// <meta property="og:locale" content="en_US" />
// <meta property="og:description" content="YOUR PAGE’S DESCRIPTION. REMEMBER THAT FACEBOOK WILL DISPLAY ONLY ABOUT 300 CHARACTERS OF DESCRIPTION" />
// <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
// <meta name="twitter:image" content="./assets/images/og-image-twitter-1024x512.png" />
// <meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT" />
// <meta name="twitter:site" content="@USERNAME" />
// <meta name="twitter:creator" content="@USERNAME" />
// <link rel="icon" href="/favicon.ico" sizes="any">
// <link rel="icon" href="/favicon.svg" sizes="type" type="image/svg+xml">
// <link rel="apple-touch-icon" href="/icon-192.png">
// <link rel="manifest" href="/manifest.webmanifest">
// <link rel="stylesheet" href="./assets/css/global.css" />
