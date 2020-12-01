const sendPokemons = require('./challenge')

/**
 * implemente testes unitários, criando mocks de chamadas as api's
 */

describe('send the pokemon', () => {
  test(`It should return 6 - only positive numbers
  [INPUT]: [15, 25, 15]`, () => {
    expect(sendPokemons([15, 25, 15])).toBe(55)
  })
})
