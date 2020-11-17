//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    loadData()
    {
        this.data.Users = new fetchUser().loadData();
        this.data.Quotes = new fetchquote().loadData();
        this.data.Bacons = new fetchLorem().loadData();
        this.data.Pokemons = new fetchPokemon().loadData();
        return this.data;
    }
}
class fetchUser extends APIManager {
  
    constructor()
    {
        super();
        this.data.users = [];
    }

    loadData()
    {
        const dataa = [];
    $.ajax({
     method: "GET",
    url: 'https://randomuser.me/api/?results=7',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      data.results.forEach(d => dataa.push({first:d.name.first, last:d.name.last, pic:d.picture.large, city:d.location.city, state:d.location.state}));
           
    },
    error: function ( data ) {
        console.log("error")
          }
  });
  return dataa
}}
class fetchquote extends APIManager {
  
  constructor()
  {
      super();
  }

  loadData()
  {
      const dataa = [];
    $.ajax({
     method: "GET",
    url: 'https://api.kanye.rest',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      dataa.push({quote:data.quote});
    },
    error: function ( data ) {
        console.log("error")
          }
  });
  return data
}}
class fetchPokemon extends APIManager {
  
  constructor()
  {
      super();
  }

  loadData()
  {
      const dataa = [];
        $.ajax({
     method: "GET",
     
    url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 801)}`,
    dataType: 'json',
    success: function(data) {
      console.log(data);
      dataa.push({image:data.sprites.front_default, text:data.name});
    },
    error: function ( data ) {
        console.log("error")
          }
  });
  return dataa
}}
class fetchLorem extends APIManager {
  
  constructor()
  {
      super();
  }

  loadData()
  {
      const dataa = [];{
    $.ajax({
     method: "GET",
     
    url: `https://baconipsum.com/api/?callback=?`,
    dataType: 'json',
    success: function(data) {
      console.log(data);
      dataa.push({bacon:data[0]});
    },
    error: function ( data ) {
        console.log("error")
          }
  });
  return dataa
}}
}