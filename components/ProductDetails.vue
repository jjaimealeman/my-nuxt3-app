<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img class="mx-auto my-7" :src="product.image" alt="product img">
            </div>
            <div class="p-7">
                <h2 class="text-4xl text-gray-800 my-7">{{ product.title }}</h2>
                <p class="text-xl my-7">Price = ${{ product.price }}</p>
                <h3 class="pb-2 mb-4 font-bold border-b-2">Product Description:</h3>
                <p class="mb7">{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
    const { product } = defineProps(['product'])
</script>


<style>
h2, h3, p {
    @apply text-gray-800;
}
img {
    max-width: 400px;
}
</style>
