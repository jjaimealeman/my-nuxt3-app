<template>
    <div v-if="loading" class="loading-page">
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        }
    }
}
</script>

<style scoped>
.loading-page {
    background: rgba(255, 255, 255, 0.8);
    font-family: sans-serif;
    font-size: 30px;
    height: 100%;
    left: 0;
    padding-top: 200px;
    position: fixed;
    text-align: center;
    top: 0;
    width: 100%;
}
</style>
