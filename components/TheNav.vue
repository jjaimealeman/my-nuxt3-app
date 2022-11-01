<template>
    <nav class="fixed top-0 w-full text-center py-4 m-0 border-0 border-b-4 border-sky-600 opacity-90">
        <ul class="list-none m-0 p-0">
            <li class="inline m-0 p-0"><NuxtLink to="/"><span class="i-ic-sharp-home"></span> Home</NuxtLink></li>
            <li class="inline m-0 p-0"><NuxtLink to="/about"><span class="i-ic-outline-article"></span> About</NuxtLink></li>
            <li class="inline m-0 p-0"><NuxtLink to="/colors"><span class="i-ic-round-color-lens"></span> Colors</NuxtLink></li>
        </ul>
    </nav>
</template>


<script>

</script>


<style scoped>
nav {
    background-color: hsl(193, 100%, 10%);
}

a {
    /* @apply text-center font-medium text-white py2 px4 m0 text-xl font-lato no-underline hover:bg-sky-700 hover:border-0 hover:border-b-4 hover:border-white; */
    @apply text-center font-medium text-white py-2 px-4 m-0 text-xl font-sans no-underline hover:text-sky-500;
}
a.router-link-active {
    /* color: red; */
    text-decoration: none;
    /* @apply text-sky border-0 border-b-4 border-sky-500 bg-sky-900; */
    /* @apply text-sky border-0 bg-sky-900; */
    @apply text-sky-500 translate-y-8 transform-gpu;
}
</style>
