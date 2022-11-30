<template>
    <div class="text-center card">
        <img class="thumb" :src="product.image" alt="product thumb">
        <p class="m-4 font-bold text-gray-500 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            {{ product.title }}
            <p class="my-4 btn">View Details</p>
        </NuxtLink>
    </div>
</template>


<script setup>
    const { product } = defineProps(['product'])
</script>


<style>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>
