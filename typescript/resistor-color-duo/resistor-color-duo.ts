// NOTE: indexing keys in an object as strings
const values: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export function decodedValue(input: string[]): number {
  const firstColor: string = input[0]
  const secondColor: string = input[1]
  return parseInt(`${values[firstColor]}${values[secondColor]}`)
}
