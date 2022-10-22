// strength, dexterity, constitution, intelligence, wisdom and charisma

function diceRoll(): number {
  return 1 + Math.floor(Math.random() * 6)
}

export class DnDCharacter {
  strength = 0
  dexterity = 0
  constitution = 0
  intelligence = 0
  wisdom = 0
  charisma = 0
  hitpoints = 0

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    return Array.from({ length: 4 }, diceRoll)
      .sort((a, b) => b - a)
      .slice(0, 2)
      .reduce((acc, n) => acc + n, 0)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
