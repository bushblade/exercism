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

export function decodedResistorValue(input: string[]): string {
  const firstColor: string = input[0]
  const secondColor: string = input[1]
  const zeros: string =
    input[2] === 'black'
      ? ''
      : Array.from({ length: values[input[2]] }, () => '0').join('')
  const ohms = parseInt(`${values[firstColor]}${values[secondColor]}${zeros}`)
  if (ohms < 1000) return `${ohms} ohms`
  return `${ohms / 1000} kiloohms`
}
