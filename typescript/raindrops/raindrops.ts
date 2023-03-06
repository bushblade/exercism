export function convert(n: number): string {
  let result = ''
  if (n % 3 === 0) result += 'Pling'
  if (n % 5 === 0) result += 'Plang'
  if (n % 7 === 0) result += 'Plong'
  return result.length > 0 ? result : `${n}`
}
