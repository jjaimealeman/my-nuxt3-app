<template>
    <div class="max-w-sm mx-auto text-center mt-7 card">
        <p class="text-4xl font-bold mt-7">{{ error.statusCode }}</p>
        <p class="mt-7">OOOPSS!!!</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn my-7" @click="handleClearError">Go Home ... </button>
    </div>
</template>


<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/' })
</script>


<style scoped>

</style>
