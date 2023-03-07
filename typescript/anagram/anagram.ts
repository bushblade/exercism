export class Anagram {
  input: string
  constructor(input: string) {
    this.input = input.toLowerCase()
  }

  private isAnagram(word: string): boolean {
    let input = this.input
    word = word.toLowerCase()
    if (input === word) return false
    for (const letter of word) {
      input = input.replace(letter, '')
    }
    return input.length === 0
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter((word) => {
      if (word.length !== this.input.length) return false
      return this.isAnagram(word)
    })
  }
}
