const capturePokemon = require('./challenge')

describe('capture the pokemon', () => {
  test(`It should return 6 - only positive numbers
  [INPUT]: [15, 25, 15]`, () => {
    expect(capturePokemon([15, 25, 15])).toBe(55)
  })
})