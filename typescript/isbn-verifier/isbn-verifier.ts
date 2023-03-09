export function isValid(isbn: string): boolean {
  const sanitized = isbn.replaceAll('-', '')
  if (sanitized.length !== 10) return false
  if (sanitized.includes('X') && sanitized[9] !== 'X') return false

  const multipliers = Array.from({ length: 10 }, (_, i) => i + 1).reverse()

  const sum = [...sanitized].reduce((acc: number, char: string, i: number) => {
    const multiplier = multipliers[i]
    const n = char === 'X' ? 10 : Number(char)
    return acc + n * multiplier
  }, 0)

  return sum % 11 === 0
}
