<template>
    <TheNav />
    <div class="container mx-auto h-full pt-24 px-4 md:px-8 m-0 text-white antialiased text-xl md:text-2xl lg:text-3xl">
        <div class="p-4">
            <NuxtPage/>
        </div>
    </div>
</template>


<script>
    export default {
        head() {
            return {
                htmlAttrs: {
                    lang: "en",
                },
            };
        }
    };
</script>


<style>
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html, body {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        touch-action: auto;
    }
    body {
        background-color: hsl(193, 100%, 7%);
        /* @apply bg-neutral op50 p0 m0; */
    }
    .container {
        transition: ease all .5s;

    }
    h1, h2 {
        @apply pt-2 pb-4 text-white underline font-sans;
    }
    p {
        @apply font-sans leading-9;
    }
</style>
