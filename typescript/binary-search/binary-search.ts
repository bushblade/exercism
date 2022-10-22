export function find(haystack: number[], needle: number): number | never {
  if (haystack.includes(needle)) return haystack.indexOf(needle)
  throw new Error('Value not in array')
}
