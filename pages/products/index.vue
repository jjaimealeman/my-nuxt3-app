<template>
    <div>
        <Head>
            <Title>{{ route.meta.title }} </Title>
          </Head>

        <h2>Products</h2>

        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
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
        content: "A Nuxt3 app ... with Products.",
      },
    ],
  },
};
</script>

<script setup>
definePageMeta({
    title: "Products Page",
    layout: 'products'
});
const { data: products } = await useFetch('https://fakestoreapi.com/products')

const route = useRoute();
console.log(route.meta.title);
</script>


<style>
body {
    color: #333;
}
</style>
