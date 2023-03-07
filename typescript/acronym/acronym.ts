export function parse(phrase: string): string {
  return phrase
    .replaceAll('-', ' ')
    .split(' ')
    .map((word) => {
      const upperCaseLetters = word.match(/[A-Z]/g)
      if (
        isCamelCase(word) &&
        upperCaseLetters &&
        upperCaseLetters.length > 1
      ) {
        return upperCaseLetters
      }
      return word
    })
    .flat()
    .map((word) => (word ? word[0].toUpperCase() : ''))
    .join('')
}

function isCamelCase(word: string): boolean {
  return /^[A-Za-z]+(?:[A-Z][a-z]*)*$/.test(word)
}
