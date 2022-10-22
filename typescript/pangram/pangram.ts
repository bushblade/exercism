export function isPangram(input: string): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const sanitized = input.toLowerCase().replace(/\W/gi, '')

  for (const letter of alphabet) if (!sanitized.includes(letter)) return false

  return true
}
