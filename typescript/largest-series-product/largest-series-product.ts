export const largestProduct = (input: string, subStrLen: number): number => {
  if (input.length === 0 && subStrLen === 0) return 1

  if (input.length < subStrLen)
    throw new Error('Span must be smaller than string length')

  if (/\D/g.test(input))
    throw new Error('Digits input must only contain digits')

  if (subStrLen < 0) throw new Error('Span must not be negative')

  const spans = [...input]
    .map((_, i) => input.substring(i, subStrLen + i))
    .filter((subStr) => subStr.length === subStrLen)

  if (spans.every((span) => span.includes('0'))) return 0

  return Math.max(...spans.map(product))
}

function product(input: string): number {
  return [...input].reduce((acc, char) => acc * parseInt(char), 1)
}
