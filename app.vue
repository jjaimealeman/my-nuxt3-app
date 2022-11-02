<template>
    <TheNav />
    <div class="container mx-auto w-screen text-white antialiased text-xl md:text-2xl lg:text-3xl pt-10">
        <NuxtPage/>
    </div>
</template>


<script>
  export default {
      head() {
          return {
              htmlAttrs: {
                  lang: "en",
              },
          };
      }
  };
</script>


<style>
  *, *::before, *::after {
      box-sizing: border-box;
  }
  html, body {
      margin: 2em auto;
      padding: 0;
      scroll-behavior: smooth;
      touch-action: auto;
  }
  body {
      background-color: hsl(193, 100%, 7%);
  }
  .container {
    transition: ease all .5s
  }
  h1, h2 {
      @apply pt-2 pb-4 text-white underline font-sans;
  }
  p {
      @apply font-sans leading-9;
  }
  .page-enter-active, .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from, .page-leave-to {
    opacity: 0;
    filter: blur(1rem)
  }
</style>
