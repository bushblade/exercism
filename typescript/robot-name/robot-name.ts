const namesDB = new Set()

export class Robot {
  robotName = ''
  constructor() {
    this.resetName()
  }

  private randomLetter(): string {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    return alpha[Math.floor(Math.random() * alpha.length)]
  }

  public get name(): string {
    return this.robotName
  }

  private randomNumber(min = 100, max = 999): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private generateName(): string {
    const newName =
      (this.robotName = `${this.randomLetter()}${this.randomLetter()}${this.randomNumber()}`)
    if (!namesDB.has(newName)) return newName
    return this.generateName()
  }

  public resetName(): void {
    this.robotName = this.generateName()
    namesDB.add(this.robotName)
  }

  public static releaseNames(): void {}
}
