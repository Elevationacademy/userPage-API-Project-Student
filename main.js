

const apiManager = new APIManager()
const render = new Renderer()

let currentData = JSON.parse(localStorage.getItem('userData')) || []
let savedFirendsData = JSON.parse(localStorage.getItem('firendsData')) || []
let items = []
$(document).on("click", "#btnGen", function () {


    apiManager.fetchData().then(() => {
        render.renderMainUser(apiManager.data.meanUser)
        render.renderQuote(apiManager.data.kanyeQuote)
        render.renderPokemon(apiManager.data.pokemon)
        render.renderMeat(apiManager.data.meat)
        render.renderFriends(apiManager.data.friends)
        render.rendersaveFriends(items)
    })

}
)
$(document).on("click", "#btnSave", function () {
    currentData = apiManager.data
    localStorage.setItem('userData', JSON.stringify(currentData))
})
$(document).on("click", "#btnLoad", function () {
    
    render.renderMainUser(currentData.meanUser)
    render.renderQuote(currentData.kanyeQuote)
    render.renderPokemon(currentData.pokemon)
    render.renderMeat(currentData.meat)
    render.renderFriends(currentData.friends)
    render.rendersaveFriends(items)

})
$(document).on("click", "#btnSavedFirends", function () {
    
    
    items.push(apiManager.data)
    localStorage.setItem('firendsData', JSON.stringify(items))
    render.rendersaveFriends(items)

})

$(document).on("click", ".renderObject", function () {
    const index = $(this).data("index")
    const item = items[index] 

        render.renderMainUser(item.meanUser)
        render.renderQuote(item.kanyeQuote)
        render.renderPokemon(item.pokemon)
        render.renderMeat(item.meat)
        render.renderFriends(item.friends)
   
    
})

apiManager.fetchData().then(() => {

    render.renderMainUser(apiManager.data.meanUser)
    render.renderQuote(apiManager.data.kanyeQuote)
    render.renderPokemon(apiManager.data.pokemon)
    render.renderMeat(apiManager.data.meat)
    render.renderFriends(apiManager.data.friends)
    render.rendersaveFriends(apiManager.items)
})

