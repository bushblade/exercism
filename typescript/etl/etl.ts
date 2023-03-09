type OldData = Record<number, string[]>
type NewData = Record<string, number>

export function transform(oldData: OldData): NewData {
  return Object.entries(oldData).reduce((acc: NewData, [score, letters]) => {
    for (const letter of letters) {
      acc[letter.toLowerCase()] = Number(score)
    }
    return acc
  }, {})
}
