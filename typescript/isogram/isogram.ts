export function isIsogram(input: string): boolean {
  const charMap: Record<string, boolean> = {}
  for (const char of input.toLowerCase().replace(/[^a-z]/g, '')) {
    if (charMap[char]) return false
    charMap[char] = true
  }
  return true
}
