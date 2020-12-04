const axios = require('axios')

const search = (pokemonName) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
}

const capturePokemon = (pokemontoCaptur, myPokemons) => {
    search(pokemontoCaptur).then( (pokemon) => {

        if(myPokemons.length < 6){
            myPokemons.push(pokemon.data.name);
            console.log(myPokemons);
        }else {
            console.log("Não pode adicionar mais pokemon");
        }
        
        return myPokemons;

    }).catch(error => {
        console.log(error)
    })
}

capturePokemon('pikachu', ['bulbasaur', 'ivysaur', 'venusaur', 'caterpie', 'charizard'])

module.exports = capturePokemon
