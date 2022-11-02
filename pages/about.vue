<template>
  <div>
    <Head>
      <Title>{{ route.meta.title }} </Title>
    </Head>

    <p>Modern day websites utilize a LOT of technologies to perform well.</p>
    <h2>My Tech Stack:</h2>
    <div
      class="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden text-center font-sans md:grid-cols-3 lg:grid-cols-4"
    >
      <div class="myIcons row-span-1 py-4"><IconJamstack /> JAMstack</div>
      <div class="myIcons row-span-1 py-4"><IconHTML /> HTML</div>
      <div class="myIcons row-span-1 py-4"><IconCSS /> CSS</div>
      <div class="myIcons row-span-1 py-4"><IconTailwindCSS /> TailwindCSS</div>
      <div class="myIcons row-span-1 py-4"><IconJavaScript /> JavaScript</div>
      <div class="myIcons row-span-1 py-4"><IconInkscape /> Inkscape</div>
      <div class="myIcons row-span-1 py-4"><IconFigma /> Figma</div>
      <div class="myIcons row-span-1 py-4">
        <IconDigitalOcean /> DigitalOcean
      </div>
      <div class="myIcons row-span-1 py-4"><IconNetlify /> Netlify</div>
      <div class="myIcons row-span-1 py-4"><IconNuxtJS /> NuxtJS</div>
      <div class="myIcons row-span-1 py-4"><IconVueJS /> VueJS</div>
      <div class="myIcons row-span-1 py-4"><IconSupabase /> Supabase</div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    meta: [
      {
        hid: "description",
        name: "description",
        content: "A Nuxt3 app ... by JJaimeAleman.",
      },
    ],
  },
};
</script>

<script setup>
definePageMeta({
  title: "About Page",
});
const route = useRoute();
console.log(route.meta.title);
</script>

<style>
.myIcons > svg {
  @apply inline;
}
</style>
