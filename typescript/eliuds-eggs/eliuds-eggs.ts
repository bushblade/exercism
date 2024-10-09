/**
 * Convert a Number to binary string and count the '1's
 * @param {number} displayValue - the number currently displayed
 * @returns {number}
 */

export const eggCount = (displayValue: number): number => {
  return displayValue.toString(2).replace(/[^1]/g, '').length
}
