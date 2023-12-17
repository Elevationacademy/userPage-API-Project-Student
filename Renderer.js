class Renderer {
  
  renderContent(classHTML, ID, data) {
    const source = $(`#${ID}`).html()
    const template = Handlebars.compile(source)
    const newHTML = template(data)
    $(`.${classHTML}`).html(newHTML)
  }

  renderMainUser(userobject) {
    this.renderContent('user-container', 'meanUser-template', userobject)
  }

  renderQuote(quote) {
    this.renderContent('quote-container', 'quote-template', { quote })
  }

  renderPokemon(pokemon) {
    this.renderContent('pokemon-container', 'pokemon-template', { pokemon })
  }

  renderMeat(meat) {
    this.renderContent('meat-container', 'meat-template', { meat })
  }

  renderFriends(friends) {
    this.renderContent('friends-container', 'friends-template', { friends })
  }

  rendersaveFriends(items) {
    this.renderContent('saveFriends-container', 'saveFriends-template', { items })
  }
}
