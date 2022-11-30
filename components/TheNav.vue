<template>
    <header class="fixed top-0 w-full py-4 border-0 border-b-4 border-sky-600 opacity-90 bg-[#181820]">
        <div class="container flex items-center justify-between px-8 mx-auto md:mx-14 lg:px-24">
            <div class="text-2xl font-bold text-white">J.Jaime.Aleman</div>
            <div class="items-center hidden space-x-12 md:flex">
                <NuxtLink to="/"> Home</NuxtLink>
                <NuxtLink to="/about"> About</NuxtLink>
                <NuxtLink to="/colors"> Colors</NuxtLink>
                <NuxtLink to="/products"> Products</NuxtLink>
                <nuxt-link to="/contact"><button>Contact Me</button></nuxt-link>
            </div>
        </div>
        <div class="md:hidden">
            <svg width="40" height="19" viewBox="0 0 40 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" width="20" height="5" fill="#D9D9D9"/>
                <rect y="14" width="20" height="5" fill="#D9D9D9"/>
                <rect y="7" width="40" height="5" fill="#D9D9D9"/>
            </svg>
        </div>
    </header>
</template>

<style scoped>
nav {
    background-color: hsl(193, 100%, 10%);
}

a {
    /* @apply text-center font-medium text-white py2 px4 m0 text-xl font-lato no-underline hover:bg-sky-700 hover:border-0 hover:border-b-4 hover:border-white; */
    @apply text-center font-medium text-white py-2 px-4 m-0 text-xl font-sans no-underline hover:text-sky-500;
}
.router-link-active {
    text-decoration: none;
    @apply text-sky-500;
}

/*
.router-link-exact-active {
    color: #12b488;
}
*/

button {
    @apply bg-sky-700 text-white px-3 py-2 rounded-md text-base;
}

</style>
