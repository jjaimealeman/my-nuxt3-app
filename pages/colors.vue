<template>
  <div>
    <Head>
      <Title>{{ route.meta.title }} </Title>
    </Head>

    <div class="text-center" v-for="item in items" v-html="item.color"></div>

  </div>
</template>

<script>
export default {
  head: {
    meta: [
      {
        hid: "description",
        name: "description",
        content: "A Nuxt3 app ... showing TailwindCSS colors.",
      },
    ],
  },
};
</script>

<script setup>
definePageMeta({
  title: "Colors Page",
  layout: "default",
});

const route = useRoute();
console.log(route.meta.title);

const items = ref([
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-pink-500'>pink</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-rose-500'>rose</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-red-500'>red</div>" },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-orange-500'>orange</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-yellow-500'>yellow</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-amber-500'>amber</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-lime-500'>lime</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-green-500'>green</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-emerald-500'>emerald</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-teal-500'>teal</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-cyan-500'>cyan</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-sky-500'>sky</div>" },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-blue-500'>blue</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-indigo-500'>indigo</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-purple-500'>purple</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-violet-500'>violet</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-fuchsia-500'>fuchsia</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-gray-500'>gray</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-slate-500'>slate</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-stone-500'>stone</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-neutral-500'>neutral</div>", },
  { color: "<div class='h-4 p-8 mb-2 font-mono bg-zinc-500'>zinc</div>", },
]);
</script>
