class APIManager {
    constructor(){
        this.data = {}
    }

    getUser(){
        $.ajax({
            url: `https://randomuser.me/api/`,
            method: "GET",
            success: (response) => { 
                    this.data.user = response
             },
            error: function(){
                alert("user error")
            }
        })
    }

    getFriends(){
        this.data.friends = []
            $.ajax({
            url: `https://randomuser.me/api/?results=6`,
            method: "GET",
            success: (response) => { 
                for (let i in response.results){
                    let friend = response.results[i]
                    let name = `${friend.name.first} ${friend.name.last}`
                    this.data.friends.push(name)
                }
             },
            error: function(){
                alert("friends error")
            }
        })
    }

    getQuote() {
        $.ajax({
            url: `https://api.taylor.rest/`,
            method: "GET",
            success: (response) => { 
                    this.data.quote = response
             },
            error: function(){
                alert("quote error")
            }
        })
    }

    getPokemon(){
        let randomPokemon = Math.floor(Math.random()*800)
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`,
            method: "GET",
            success: (response) => { 
                    this.data.pokemon = response
             },
            error: function(){
                alert("pokemon error")
            }
        })
    }

    getFood(){
        $.ajax({
            url: `https://www.themealdb.com/api/json/v1/1/random.php`,
            method: "GET",
            success: (response) => { 
                    this.data.food = response
             },
            error: function(){
                alert("food error")
            }
        })
    }
}





