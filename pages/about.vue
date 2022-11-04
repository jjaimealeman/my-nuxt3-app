<template>
  <div>
    <Head>
      <Title>{{ route.meta.title }} </Title>
    </Head>

    <p>Modern day websites utilize a LOT of technologies to perform well.</p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus velit,
      repellendus distinctio voluptatibus modi illo, fugit sint praesentium quam
      veritatis, doloribus qui. Pariatur ipsam neque nemo, illo rerum cum a nam
      voluptatibus exercitationem quidem molestias! Aperiam officia, vero ad
      voluptatum, dolor, mollitia quas quidem voluptatem ipsum nam neque? Sit
      voluptate tempora dolores asperiores, quo iste.
    </p>
    <h2>My Tech Stack:</h2>
    <div class="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden font-sans text-center md:grid-cols-3 lg:grid-cols-4">
      <div class="row-span-1 py-4 myIcons"><IconJamstack /> JAMstack</div>
      <div class="row-span-1 py-4 myIcons"><IconHTML /> HTML</div>
      <div class="row-span-1 py-4 myIcons"><IconCSS /> CSS</div>
      <div class="row-span-1 py-4 myIcons"><IconTailwindCSS /> TailwindCSS</div>
      <div class="row-span-1 py-4 myIcons"><IconJavaScript /> JavaScript</div>
      <div class="row-span-1 py-4 myIcons"><IconInkscape /> Inkscape</div>
      <div class="row-span-1 py-4 myIcons"><IconFigma /> Figma</div>
      <div class="row-span-1 py-4 myIcons"><IconDigitalOcean /> DigitalOcean</div>
      <div class="row-span-1 py-4 myIcons"><IconNetlify /> Netlify</div>
      <div class="row-span-1 py-4 myIcons"><IconNuxtJS /> NuxtJS</div>
      <div class="row-span-1 py-4 myIcons"><IconVueJS /> VueJS</div>
      <div class="row-span-1 py-4 myIcons"><IconSupabase /> Supabase</div>
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
