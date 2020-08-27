
const renderer = new Renderer()
const apiManager = new APIManager()
let thisUser = []
let savedUsersCounter = 0



// saving existing local storage data to the dropdown bar:
for(let i=0;i< localStorage.length;i++){
    renderer.addUser(i)
    savedUsersCounter = i+1
}


$('#load').on('click', function () {
    apiManager.getUser()
    apiManager.getFood()
    apiManager.getPokemon()
    apiManager.getQuote()
    apiManager.getFriends()
})


$('#render').on('click', function () {
    $('.user-container').empty()
    $('.quote-container').empty()
    $('.pokemon-container').empty()
    $('.food-container').empty()
    $('.friends-container').empty()
    
    let data = apiManager.data
    thisUser.push(data)
    renderer.render(data)
})


$('#save').on('click',function(){
    // setting different Local Storage objects:
    let storageLocation = "userInfo"+savedUsersCounter 
    
    localStorage.setItem(storageLocation,JSON.stringify(thisUser))
    renderer.addUser(savedUsersCounter)
    savedUsersCounter++
    globalUser = []    
})


$('#import').on('click',function(){
    $('.user-container').empty()
    $('.quote-container').empty()
    $('.pokemon-container').empty()
    $('.food-container').empty()
    $('.friends-container').empty()

    let whichUser = $('#dropdown option:selected').val()

    let storageLocation = "userInfo"+whichUser
    let data = JSON.parse(localStorage.getItem(storageLocation) || "[]")
    renderer.render(data[0])
})