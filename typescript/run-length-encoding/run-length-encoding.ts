export function encode(input: string): string {
  const groupedArray = input.match(/(.)\1*/g)
  if (!groupedArray) return input

  return groupedArray
    .map((str) => (str.length > 1 ? `${str.length}${str[0]}` : str))
    .join('')
}

export function decode(input: string): string {
  const groupedArray = input.match(/(\d*[\WA-Za-z])/g)
  if (!groupedArray) return input

  return groupedArray.reduce(
    (output, str) =>
      str.length > 1
        ? (output += str[str.length - 1].repeat(
            parseInt(str.substring(0, str.length - 1))
          ))
        : (output += str),
    ''
  )
}
