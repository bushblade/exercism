const scoreTable: Record<string, number> = {}

function addToScoreTable(letters: string, value: number): void {
  for (const letter of letters) {
    scoreTable[letter] = value
  }
}

addToScoreTable('aeioulnrst', 1)
addToScoreTable('dg', 2)
addToScoreTable('bcmp', 3)
addToScoreTable('fhvwy', 4)
addToScoreTable('k', 5)
addToScoreTable('jx', 8)
addToScoreTable('qz', 10)

export function score(word: string | undefined): number {
  if (!word) return 0
  return [...word.toLowerCase()].reduce(
    (acc, char) => acc + scoreTable[char],
    0
  )
}
