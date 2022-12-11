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
      <div class="myIcons"><Icon name="logos:jamstack-icon" />JAMstack</div>
      <div class="myIcons"><Icon name="vscode-icons:file-type-html" />HTML</div>
      <div class="myIcons"><Icon name="vscode-icons:file-type-css" />CSS</div>
      <div class="myIcons"><Icon name="logos:tailwindcss-icon" />TailwindCSS</div>
      <div class="myIcons"><Icon name="logos:javascript" />JavaScript</div>
      <div class="myIcons"><Icon name="simple-icons:inkscape" />Inkscape</div>
      <div class="myIcons"><Icon name="logos:figma" />Figma</div>
      <div class="myIcons"><Icon name="simple-icons:digitalocean" />DigitalOcean</div>
      <div class="myIcons"><Icon name="vscode-icons:file-type-netlify" />Netlify</div>
      <div class="myIcons"><Icon name="logos:nuxt-icon" />NuxtJS</div>
      <div class="myIcons"><Icon name="logos:vue" />VueJS</div>
      <div class="myIcons"><Icon name="logos:supabase-icon" />Supabase</div>
    </div>
    <p class="data">{{ data }}</p>
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
  layout: 'default'
});
const route = useRoute();
console.log(route.meta.title);

const { data } = await useFetch('/api/currency/GBP')
</script>

<style>
.myIcons {
  @apply py-4;
}
.myIcons > svg {
  @apply mr-2;
}
</style>
