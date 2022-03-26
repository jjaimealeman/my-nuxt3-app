<template>
    <div>
        <Head>
            <Title>{{ route.meta.title }} </Title>
        </Head>
            <!-- <div class="flex flex-col justify-center items-center text-center text-black align-top text-white" v-for="item in items" v-html="item.color"></div> -->
            <div class="flex flex-col justify-center items-center text-center text-black align-top text-white" v-for="item in items" v-html="item.color"> </div>

    </div>
</template>

<script setup>
    definePageMeta({
        title: 'Colors Page'
    })
    const route = useRoute()
    console.log(route.meta.title)

    const items = ref(
        [
            { color: "<div class='p-8 w-full h-4 bg-pink-500 mb-2'><span class='font-mono'> pink </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-rose-500 mb-2'><span class='font-mono'> rose </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-red-500 mb-2'><span class='font-mono'> red </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-orange-500 mb-2'><span class='font-mono'> orange </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-yellow-500 mb-2'><span class='font-mono'> yellow </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-amber-500 mb-2'><span class='font-mono'> amber </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-lime-500 mb-2'><span class='font-mono'> lime </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-green-500 mb-2'><span class='font-mono'> green </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-emerald-500 mb-2'><span class='font-mono'> emerald </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-teal-500 mb-2'><span class='font-mono'> teal </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-cyan-500 mb-2'><span class='font-mono'> cyan </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-sky-500 mb-2'><span class='font-mono'> sky </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-blue-500 mb-2'><span class='font-mono'> blue </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-indigo-500 mb-2'><span class='font-mono'> indigo </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-purple-500 mb-2'><span class='font-mono'> purple </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-violet-500 mb-2'><span class='font-mono'> violet </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-fuchsia-500 mb-2'><span class='font-mono'> fuchsia </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-gray-500 mb-2'><span class='font-mono'> gray </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-slate-500 mb-2'><span class='font-mono'> slate </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-stone-500 mb-2'><span class='font-mono'> stone </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-neutral-500 mb-2'><span class='font-mono'> neutral </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-zinc-500 mb-2'><span class='font-mono'> zinc </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-light-500 mb-2'><span class='font-mono'> light </span></div>" },
            { color: "<div class='p-8 w-full h-4 bg-dark-500 mb-2'><span class='font-mono'> dark </span></div>" }
        ]
    );

</script>
