const capturePokemon = require('./challenge')

/**
 * implemente testes unitários, criando mocks de chamadas as api's
 */

describe('by type', () => {
  test(`It should return 6 - only positive numbers
  [INPUT]: 'pikachu'`, () => {
    
    expect(capturePokemon('pikachu')).toMatchObject(['bulbassauro', 'charmander', , 'pikachu'])
  })
})