export function count(input: string): Map<string, number> {
  return input
    .replace(/[/\n/\t]/gi, ' ')
    .split(' ')
    .map((w) => w.trim())
    .filter((w) => w.length > 0)
    .reduce((map, word: string) => {
      const key = word.toLowerCase()
      if (map.has(key)) map.set(key, map.get(key) + 1)
      else map.set(key, 1)
      return map
    }, new Map())
}
