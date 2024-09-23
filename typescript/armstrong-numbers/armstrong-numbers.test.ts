import { describe, test, expect } from 'bun:test'
import { isArmstrongNumber } from './armstrong-numbers.ts'

describe('Armstrong Numbers', () => {
  test('Single-digit numbers are Armstrong numbers', () => {
    expect(isArmstrongNumber(5)).toBe(true)
  })

  test('There are no two-digit Armstrong numbers', () => {
    expect(isArmstrongNumber(10)).toBe(false)
  })

  test('Three-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(153)).toBe(true)
  })

  test('Three-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(100)).toBe(false)
  })

  test('Four-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9474)).toBe(true)
  })

  test('Four-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9475)).toBe(false)
  })

  test('Seven-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9926315)).toBe(true)
  })

  test('Seven-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9926314)).toBe(false)
  })

  test('Armstrong number containing seven zeroes', () => {
    expect(isArmstrongNumber(BigInt('186709961001538790100634132976990'))).toBe(
      true
    )
  })

  test.skip('The largest and last Armstrong number', () => {
    expect(
      isArmstrongNumber(BigInt('115132219018763992565095597973971522401'))
    ).toBe(true)
  })
})
