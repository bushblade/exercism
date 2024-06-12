export function nucleotideCounts(input: string): Record<string, number> {
  if (!/^[ACGT]*$/.test(input)) throw new Error('Invalid nucleotide in strand')

  return [...input].reduce(
    (acc: Record<string, number>, char: string) => {
      if (acc[char]) acc[char] += 1
      else acc[char] = 1
      return acc
    },
    {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    }
  )
}
