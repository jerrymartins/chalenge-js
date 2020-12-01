const capturePokemon = require('./challenge')

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

const charmander = require('../../../utils/pokemonApi.response')

var mock = new MockAdapter(axios);

/**
 * implemente testes unitários, criando mocks de chamadas as api's
 */

describe('capture', () => {
  test(`It should return array with lenght 4 - contains charmander
  [INPUT]: 'charmander'`, async () => {
    const t = await mock.onGet("https://pokeapi.co/api/v2/pokemon/charmander").reply(200, charmander);

    const myPokemons = ['bulbasaur', 'ivysaur', 'venusaur', 'caterpie', 'charizard'];

    expect(capturePokemon('charmander', myPokemons)).toMatchObject(['bulbasaur', 'ivysaur', 'venusaur', 'caterpie', 'charizard', 'charmander'])
  })

  test(`You should not add pokemon if repeated - charmander repeated
  [INPUT]: 'charmander'`, async () => {
    const t = await mock.onGet("https://pokeapi.co/api/v2/pokemon/charmander").reply(200, charmander);

    const myPokemons = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charizard'];

    expect(capturePokemon('charmander', myPokemons)).toThrowError('error');
  })
})