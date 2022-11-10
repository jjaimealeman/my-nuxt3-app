<template>
  <TheNav />
  <main
    class="container flex items-center justify-between mx-auto text-xl antialiased text-white md:text-2xl lg:text-3xl"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  margin: 3em auto;
  padding: 0;
  scroll-behavior: smooth;
  touch-action: auto;
}
body {
  /*
background-color: hsl(193, 100%, 7%);
*/
  background-color: hsl(240, 15%, 11%);
}
.container {
  transition: ease all 0.5s;
}
h1,
h2 {
  @apply pt-2 pb-4 font-sans text-white underline;
}
p {
  @apply font-sans leading-9;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
