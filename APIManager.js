class APIManager 
{
    constructor() {
        this.data = {}
        this.currentUser = {}

    }

    fetchData() 
    {
        const numberUsers = 7

        const randomUserApi = `https://randomuser.me/api/?results=${numberUsers}`
        const kanyeApi = 'https://api.kanye.rest/'
        const pokemonApi = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 950)}`
        const meatApi = 'https://baconipsum.com/api/?type=meat'
        
        return Promise.all([

            $.get(randomUserApi),
            $.get(kanyeApi),
            $.get(pokemonApi),
            $.get(meatApi)
        ]).then(data => 
            {
            const users = data[0]
            this.data = {
                meanUser: users.results[0],
                kanyeQuote: data[1].quote,
                pokemon: data[2],
                meat: data[3][0],
                friends: users.results.slice(1)
            }
                   
        })
    }

}

