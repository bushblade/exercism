const allergens: string[] = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats',
]

export class Allergies {
  score: number[]
  constructor(score: number) {
    this.score = score.toString(2).split('').reverse().map(Number)
  }

  public list(): string[] {
    return allergens.filter((_, indx) => this.score[indx])
  }

  public allergicTo(allergen: string): boolean {
    return this.list().includes(allergen)
  }
}
