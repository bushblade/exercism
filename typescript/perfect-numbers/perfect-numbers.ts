function aliquotSum(n: number): number {
  let sum = 0
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i
  }
  return sum
}

export function classify(n: number): string {
  if (n <= 0)
    throw new Error('Classification is only possible for natural numbers.')
  const aSum = aliquotSum(n)
  if (aSum === n) return 'perfect'
  if (n < aSum) return 'abundant'
  return 'deficient'
}
