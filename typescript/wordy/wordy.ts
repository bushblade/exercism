const operations: { [key: string]: (a: number, b: number) => number } = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiplied: (a, b) => a * b,
  divided: (a, b) => a / b,
}

function validateinputs(
  operation: string | number,
  nextNum: string | number
): void {
  if (operations[nextNum]) throw new Error('Syntax error')
  if (typeof operation === 'number') throw new Error('Syntax error')
  if (!operations[operation]) throw new Error('Unknown operation')
  if (!nextNum) new Error('Syntax error')
}

function calcualate([num, operation, nextNum, ...rest]: Array<
  string | number
>): number {
  if (!operation) return num as number
  validateinputs(operation, nextNum)
  return calcualate([
    operations[operation](num as number, nextNum as number),
    ...rest,
  ])
}

export const answer = (input: string): number => {
  const sanitized = input
    .toLowerCase()
    .replace('?', '')
    .split(' ')
    .filter((str) => {
      if (str.length === 0) return false
      if (str === 'by') return false
      if (str === 'what') return false
      if (str === 'is') return false
      return true
    })
    .map((numOrOp) => (Number(numOrOp) ? Number(numOrOp) : numOrOp))
  const result = calcualate(sanitized)
  if (isNaN(result)) throw new Error('Syntax error')
  return result
}
