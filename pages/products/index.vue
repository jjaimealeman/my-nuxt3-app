<template>
    <div>
        <h2>Products</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>


<script setup>
definePageMeta({
    title: "Products Page"
    // layout: 'products'
});
const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>


<style>
body {
    color: #333;
}
</style>
