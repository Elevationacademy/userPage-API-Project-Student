
class Renderer {
    constructor(data) {
        this.data = data
    }
    render(data) {

        //user
        const user = function () {
            let _user = data.user.results[0]
            let name = `${_user.name.title} ${_user.name.first} ${_user.name.last}`
            let img = _user.picture.thumbnail
            let city = _user.location.city
            let state = _user.location.state

            let source = $('#user-template').html()
            let template = Handlebars.compile(source)
            let newHTML = template({ name, img, city, state })
            $('.user-container').append(newHTML)
        }


        //quote
        const quote = function () {
            let _quote = data.quote
            let text = _quote.quote
            let source = $('#quote-template').html()
            let template = Handlebars.compile(source)
            let newHTML = template({text})
            $('.quote-container').append(newHTML)
        }


        //pokemon
        const pokemon = function () {
            let _pokemon = data.pokemon
            let pokeName = _pokemon.species.name
            pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
            let sprite = _pokemon.sprites.front_default

            const source = $('#pokemon-template').html()
            const template = Handlebars.compile(source)
            const newHTML = template({ pokeName, sprite })
            $('.pokemon-container').append(newHTML)

        }


        //food
        const food = function () {
            let _food = data.food.meals[0]
            let foodName = _food.strMeal
            let foodInst = _food.strInstructions

            const source = $('#food-template').html()
            const template = Handlebars.compile(source)
            const newHTML = template({ foodName, foodInst })
            $('.food-container').append(newHTML)

        }


        //friends
        const friends = function () {
            let theFriends = data.friends

            const source = $('#friends-template').html()
            const template = Handlebars.compile(source)
            const newHTML = template({ theFriends })
            $('.friends-container').append(newHTML)

        }


        user()
        quote()
        pokemon()
        food()
        friends()

    }

    addUser(value){
        const source = $('#dropdown-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({value})
        $('#dropdown').append(newHTML)
    }

}