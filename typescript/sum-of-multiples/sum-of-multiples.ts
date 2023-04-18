export function sum(factors: number[], limit: number): number {
  const allMultiples = factors
    .map((n) => allMultiplesOfLessThanLimit(n, limit))
    .flat()
  const allUniqueMultiples = Array.from(new Set(allMultiples))
  return allUniqueMultiples.reduce((n, acc) => acc + n, 0)
}

function allMultiplesOfLessThanLimit(n: number, limit: number): number[] {
  if (n > limit || n === 0) return [0]
  return extendRange([n], limit)
}

function extendRange(arr: number[], limit: number): number[] {
  const nextN = arr[arr.length - 1] + arr[0]
  return nextN < limit ? extendRange([...arr, nextN], limit) : arr
}
