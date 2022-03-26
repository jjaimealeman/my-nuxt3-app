<template>
    <div>
        <Head>
            <Title>{{ route.meta.title }} </Title>
        </Head>
        <p>
            Modern day websites utilize a LOT of technologies to perform well.
        </p>
        <h2>My Tech Stack:</h2>
        <div class="grid overflow-hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-2 text-center font-sans">
            <div class="row-span-1 py-4 myIcons"><IconJamstack/> JAMstack</div>
            <div class="row-span-1 py-4 myIcons"><IconHTML/> HTML</div>
            <div class="row-span-1 py-4 myIcons"><IconCSS/> CSS</div>
            <div class="row-span-1 py-4 myIcons"><IconWindiCSS/> WindiCSS</div>
            <div class="row-span-1 py-4 myIcons"><IconJavaScript/> JavaScript</div>
            <div class="row-span-1 py-4 myIcons"><IconInkscape/> Inkscape</div>
            <div class="row-span-1 py-4 myIcons"><IconFigma/> Figma</div>
            <div class="row-span-1 py-4 myIcons"><IconDigitalOcean/> DigitalOcean</div>
            <div class="row-span-1 py-4 myIcons"><IconNetlify/> Netlify</div>
            <div class="row-span-1 py-4 myIcons"><IconNuxtJS/> NuxtJS</div>
            <div class="row-span-1 py-4 myIcons"><IconVueJS/> VueJS</div>
            <div class="row-span-1 py-4 myIcons"><IconSupabase/> Supabase</div>
        </div>
    </div>
</template>

<script setup>

    definePageMeta({
        title: 'About Page'
    })
    const route = useRoute()
    console.log(route.meta.title)
</script>

<style>
    .myIcons > svg {
        @apply inline;
    }
</style>
