class Renderer
{
    constructor()
    {
        this.data = {};
    }

    renderData(data)
    {
        new RenderUsers().renderData(data.Users);
        new RenderQuotes().renderData(data.Quotes);
        new RenderBacons().renderData(data.Bacons);
        new RenderPokemons().renderData(data.Pokemons);
    }
}

class RenderUsers extends Renderer
{
    constructor()
    {
        super();
       
    }

    renderData(data)
    {
        $(".user-container").empty();
        const template = Handlebars.compile($('#usersData-temp').html());
        $(".user-container").append(template(data[0]));
        $(".friends-container").empty();
        const template2 = Handlebars.compile($('#friendsData-temp').html());
        $(".friends-container").append(template2(data.filter(friends => friends !== data[0])));
    }
}

class RenderQuotes extends Renderer
{
    constructor()
    {
        super();
    
    }

    renderData(data)
    {
        $(".quote-container").empty();
        const template = Handlebars.compile($('#quotesData-temp').html());
        $(".quote-container").append(template(data));
    }
}

class RenderBacons extends Renderer
{
    constructor()
    {
        super();
        
    }

    renderData(data)
    {
        $(".meat-container").empty();
        const template = Handlebars.compile($('#baconsData-temp').html());
        $(".meat-container").append(template(data));
    }
}

class RenderPokemons extends Renderer
{
    constructor()
    {
        super();
        
    }

    renderData(data)
    {
        $(".pokemon-container").empty();
        const template = Handlebars.compile($('#pokemonsData-temp').html());
        $(".pokemon-container").append(template(data));
    }
}

Handlebars.registerHelper("capitalize", function(string)
{
    string = string || '';
    return string.slice(0,1).toUpperCase() + string.slice(1);
});
