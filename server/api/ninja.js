export default defineEventHandler(async (event) => {

    // // handle query params
    // const { name } = useQuery(event)

    // // handle post data
    // const { age } = await useBody(event)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=9lniJLgjMMzSAzoRXqBMafZTBWWM4rLbcjqGbrS0')

    // return {
    //     message: `Hello, ${name}. You are ${age} years old.`
    // }
    return data

})
