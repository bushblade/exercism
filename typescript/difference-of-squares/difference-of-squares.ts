export class Squares {
  private nums: number[]
  constructor(count: number) {
    this.nums = Array.from({ length: count }, (_, i) => i + 1)
  }

  get sumOfSquares(): number {
    return this.nums.reduce((acc, n) => acc + n * n, 0)
  }

  get squareOfSum(): number {
    const sum = this.nums.reduce((acc, n) => acc + n, 0)
    return sum * sum
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}
