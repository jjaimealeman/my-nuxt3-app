<template>
    <div>
        <Head>
            <Title>{{ route.meta.title }}</Title>
        </Head>

        <h2 class="font-white">Home</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi soluta necessitatibus laboriosam. Accusamus totam adipisci sapiente laudantium unde? Nesciunt earum nam debitis libero doloribus? Illum illo et id dignissimos omnis, a delectus quia, architecto tenetur fuga tempora, magnam suscipit. Mollitia molestias voluptates ad soluta aperiam minus dolor maiores ea quaerat.</p>



    </div>
</template>

<script setup>
    definePageMeta({
        title: 'Home Page'
    });
    const route = useRoute();
    console.log(route.meta.title);


// const items = ref(
//     [
//         { color: "<div class='p8 w-full h-4 bg-red mb2'> red </div>" },
//         { color: "<div class='p8 w-full h-4 bg-blue mb2'> blue </div>" },
//         { color: "<div class='p8 w-full h-4 bg-purple mb2'> purple </div>" },
//         { color: "<div class='p8 w-full h-4 bg-green mb2'> green </div>" }
//     ]
// );


</script>
