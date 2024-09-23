export function isArmstrongNumber(num: number): boolean {
  const numStr = `${num}`
  const numLength = BigInt(numStr.length)
  return (
    numStr
      .split('')
      .map(BigInt)
      .reduce((acc, n) => {
        return acc + n ** numLength
      }, BigInt(0)) === BigInt(num)
  )
}
