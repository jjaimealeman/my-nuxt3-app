<template>
    <div>
        <p class="text-2xl">Products details for {{ id }}</p>
        <p class="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo illo cupiditate quasi quis cum minus nihil fuga, quas atque asperiores ducimus! Placeat in illum, deleniti autem nobis maiores obcaecati mollitia impedit itaque.</p>
    </div>
</template>


<script setup>
    const { id } = useRoute().params
</script>


<style>
    body {
        color: #333;
    }
</style>
