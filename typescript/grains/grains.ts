const squaresCache = new Map()

export const square = (nOfSquare: number): bigint => {
  if (nOfSquare < 1 || nOfSquare > 64)
    throw new Error('Please give a valid board square')

  const fromCache = squaresCache.get(nOfSquare)
  if (fromCache) return fromCache

  let total = 1n
  for (let i = 1n; i < nOfSquare; i++) {
    total *= 2n
  }

  squaresCache.set(nOfSquare, total)

  return total
}

export const total = (): bigint => {
  let sum = 0n

  for (let i = 1; i <= 64; i++) {
    const fromCache = squaresCache.get(i)

    sum += fromCache ? fromCache : square(i)
  }

  return sum
}
