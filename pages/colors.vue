<template>
    <div>
        <Head>
            <Title>{{ route.meta.title }} </Title>
        </Head>

        <div class="flex flex-col justify-center items-center text-center align-top" v-for="item in items" v-html="item.color"> </div>
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
            { color: "<div class='font-mono p-8 w-full h-4 bg-pink-500 mb-2'>pink</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-rose-500 mb-2'>rose</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-red-500 mb-2'>red</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-orange-500 mb-2'>orange</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-yellow-500 mb-2'>yellow</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-amber-500 mb-2'>amber</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-lime-500 mb-2'>lime</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-green-500 mb-2'>green</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-emerald-500 mb-2'>emerald</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-teal-500 mb-2'>teal</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-cyan-500 mb-2'>cyan</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-sky-500 mb-2'>sky</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-blue-500 mb-2'>blue</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-indigo-500 mb-2'>indigo</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-purple-500 mb-2'>purple</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-violet-500 mb-2'>violet</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-fuchsia-500 mb-2'>fuchsia</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-gray-500 mb-2'>gray</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-slate-500 mb-2'>slate</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-stone-500 mb-2'>stone</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-neutral-500 mb-2'>neutral</div>" },
            { color: "<div class='font-mono p-8 w-full h-4 bg-zinc-500 mb-2'>zinc</div>" },
        ]
    );

</script>
