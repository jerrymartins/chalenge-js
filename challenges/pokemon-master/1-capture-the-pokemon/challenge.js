/*
 * Neste desafio você é um mestre pokemon e deve capturar um pokemon
 * cada mestre pode ter consigo apenas 6 pokemons, e deve escolher um pokemon 
 * para descartar :/ , caso capture mais do que 6 pokemons
 * crie uma função que recebea uma lista de pokemons já capturados e o nome de um pokemon para capturar,
 * capture um pokemon e retorne uma lista dos pokemons
 * 
 * deve capturar somente um pokemon que exista, utilize a api https://pokeapi.co/api/v2/pokemon/{name} para validar a existencia do pokemon 
 * não deve ter pokemons repetidos
 * não deve aceitar mais que 6 pokemons
 */

const axios = require('axios')

const search = (pokemonName) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
}


const capturePokemon = (pokemontoCaptur, myPokemons) => 

{
    search(pokemontoCaptur).then( (pokemon) => {

        if (myPokemons.length <= 5) {

            myPokemons.push(pokemon.data.name)
            console.log(myPokemons);


        } else {

            console.log("Você não pode ter mais de 6 pokémons no seu time!")
        }
        return myPokemons;

    }).catch(error => {
        console.log(error)
    }) 
                       
}

console.log(capturePokemon('pikachu',['ivysaur', 'venusaur', 'caterpie', 'charizard', 'yuto',]))

module.exports = capturePokemon
