<template>
    <div>
        <Head>
            <Title>{{ route.meta.title }} </Title>
        </Head>
            <!-- <div class="flex flex-col justify-center items-center text-center text-black align-top text-white" v-for="item in items" v-html="item.color"></div> -->
            <div class="flex flex-col justify-center items-center text-center text-black align-top text-white" v-for="item in items" v-html="item.color"> </div>

    </div>
</template>

<script>
    export default {
        head: {
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'A Nuxt3 app ... showing WindiCSS colors.'
                }
            ],
        }
    }
</script>

<script setup>
    definePageMeta({
        title: 'Colors Page'
    })
    const route = useRoute()
    console.log(route.meta.title)

    const items = ref(
        [
            { color: "<div class='p-8 w-full h-4 bg-pink-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> pink </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-rose-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> rose </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-red-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> red </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-orange-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> orange </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-yellow-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> yellow </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-amber-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> amber </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-lime-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> lime </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-green-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> green </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-emerald-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> emerald </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-teal-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> teal </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-cyan-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> cyan </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-sky-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> sky </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-blue-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> blue </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-indigo-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> indigo </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-purple-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> purple </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-violet-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> violet </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-fuchsia-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> fuchsia </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-gray-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> gray </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-slate-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> slate </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-stone-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> stone </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-neutral-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> neutral </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-zinc-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> zinc </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-light-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> light </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-dark-500 mb-2'><span class='font-mono bg-dark-500 text-light-500 p-2 rounded-t-md'> dark </span></div>" }
        ]
    );

</script>
