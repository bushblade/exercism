const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
const cipher = 'zyxwvutsrqponmlkjihgfedcba'.split('')

function chunkString(str: string, n: number): Array<string> {
  const chunk = (a: Array<string> = []): Array<string> => {
    a.push(str.substring(0, n))
    str = str.substring(n)
    return str.length > 0 ? chunk(a) : a
  }
  return chunk()
}

export function encode(plainText: string): string {
  const encoded = plainText
    .toLowerCase()
    .split('')
    .reduce((acc, char) => {
      if (alpha.includes(char)) acc += cipher[alpha.indexOf(char)]
      if (/[0-9]/.test(char)) acc += char
      return acc
    }, '')
  return chunkString(encoded, 5).join(' ')
}

export function decode(cipherText: string): string {
  return cipherText
    .toLowerCase()
    .split('')
    .reduce((acc, char) => {
      if (cipher.includes(char)) acc += alpha[cipher.indexOf(char)]
      if (/[0-9]/.test(char)) acc += char
      return acc
    }, '')
}
