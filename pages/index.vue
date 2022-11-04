<template>
    <div>
        <Head>
            <Title>{{ route.meta.title }}</Title>
        </Head>

        <h2 class="font-white">Home</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi soluta necessitatibus laboriosam. Accusamus totam adipisci sapiente laudantium unde? Nesciunt earum nam debitis libero doloribus? Illum illo et id dignissimos omnis, a delectus quia, architecto tenetur fuga tempora, magnam suscipit. Mollitia molestias voluptates ad soluta aperiam minus dolor maiores ea quaerat.</p>

    </div>
</template>

<script>
    export default {
        head: {
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'A Nuxt3 app ... with PWA-ability? ... not yet!'
                }
            ],
            // link: [
            //     {
            //         rel: 'icon',
            //         type: 'image/x-icon',
            //         href: './favicon.ico'
            //     }
            // ]
        }
    }
    // <link rel="icon" href="/favicon.ico" />
</script>

<script setup>
    definePageMeta({
        title: 'Home Page'
    });
    const route = useRoute();
    console.log(route.meta.title);


// const items = ref(
//     [
//         { color: "<div class='w-full h-4 p8 bg-red mb2'> red </div>" },
//         { color: "<div class='w-full h-4 p8 bg-blue mb2'> blue </div>" },
//         { color: "<div class='w-full h-4 p8 bg-purple mb2'> purple </div>" },
//         { color: "<div class='w-full h-4 p8 bg-green mb2'> green </div>" }
//     ]
// );


</script>
