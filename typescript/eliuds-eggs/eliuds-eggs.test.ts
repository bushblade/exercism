import { describe, test, expect } from 'bun:test'
import { eggCount } from './eliuds-eggs.ts'

describe('EliudsEggs', () => {
  test('0 eggs', () => {
    const expected = 0
    const actual = eggCount(0)
    expect(actual).toEqual(expected)
  })

  test.skip('1 egg', () => {
    const expected = 1
    const actual = eggCount(16)
    expect(actual).toEqual(expected)
  })

  test.skip('4 eggs', () => {
    const expected = 4
    const actual = eggCount(89)
    expect(actual).toEqual(expected)
  })

  test.skip('13 eggs', () => {
    const expected = 13
    const actual = eggCount(2000000000)
    expect(actual).toEqual(expected)
  })
})
