export class SimpleCipher {
  key = ''
  private alpha = 'abcdefghijklmnopqrstuvwxyz'

  constructor(key?: string) {
    if (key) this.key = key.toLowerCase()
    else this.key = this.generateKey()
  }
  private generateKey(): string {
    return Array.from({ length: 100 }).reduce((key: string) => {
      return (key += this.alpha[Math.floor(Math.random() * 26)])
    }, '')
  }

  encode(input: string): string {
    return [...input].reduce((output: string, char, indx) => {
      const indxInAlpha = this.alpha.indexOf(char)
      const shift = this.alpha.indexOf(this.key[indx % this.key.length])
      return (output += this.alpha[(indxInAlpha + shift) % this.alpha.length])
    }, '')
  }

  decode(input: string): string {
    return [...input].reduce((output: string, char, indx) => {
      const indxInAlpha = this.alpha.indexOf(char)
      const shift = this.alpha.indexOf(this.key[indx % this.key.length])
      return (output +=
        this.alpha[
          (indxInAlpha - shift + this.alpha.length) % this.alpha.length
        ])
    }, '')
  }
}
