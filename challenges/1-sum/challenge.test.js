const sumArguments = require('./challenge')

describe('sum', () => {
  test(`It should return 6 - only positive numbers
  [INPUT]: [15, 25, 15]`, () => {
    expect(sumArguments([15, 25, 15])).toBe(55)
  })

  test(`It should return 3 - with negative number
  [INPUT]: [1, 2, 2, -2]`, () => {
    expect(sumArguments([1, 2, 2, -2])).toBe(3)
  })

  test(`It should return 'meu nome não é Jhonny' - only strings
  [INPUT]: ['meu ', 'nome ', 'não ', 'é ', 'Jhonny']`, () => {
    expect(sumArguments(['meu ', 'nome ', 'não ', 'é ', 'Jhonny'])).toBe('meu nome não é Jhonny')
  })

  test(`It should return 8and weird - with numbers and strings
  [INPUT]: [400, 0, 4, '404 not found']`, () => {
    expect(sumArguments([400, 0, 4, ' not found'])).toBe('404 not found')
  })
})
