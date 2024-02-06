export function clean(input: string): string {
  const punctuationRegex = /[!:@]/g
  if (punctuationRegex.test(input))
    throw new Error('Punctuations not permitted')

  if (/[a-z]/gi.test(input)) throw new Error('Letters not permitted')

  let cleaned = input.replaceAll(/\D/g, '')

  if (cleaned[0] === '0') throw new Error('Area code cannot start with zero')

  if (cleaned.length === 9) throw new Error('Incorrect number of digits')

  if (cleaned.length === 11) {
    if (cleaned[0] !== '1') throw new Error('11 digits must start with 1')
    cleaned = cleaned.substring(1)
    if (cleaned[0] === '1') throw new Error('Area code cannot start with one')
    if (cleaned[0] === '0') throw new Error('Area code cannot start with zero')
  }

  if (cleaned[3] === '0')
    throw new Error('Exchange code cannot start with zero')

  if (cleaned[3] === '1') throw new Error('Exchange code cannot start with one')

  if (cleaned[0] === '1') throw new Error('Area code cannot start with one')

  if (cleaned.length > 11) throw new Error('More than 11 digits')

  if (cleaned.length !== 10) throw new Error('Incorrect number of digits')

  return cleaned
}
