export class Triangle {
  sides = [0, 0, 0]
  constructor(...sides: [number, number, number]) {
    this.sides = sides
  }
  private get isTriangle(): boolean {
    const [a, b, c] = this.sides
    return (
      this.sides.every((side) => side > 0) &&
      [a + b > c, b + c > a, c + a > b].every((s) => s)
    )
  }

  get isEquilateral(): boolean {
    if (!this.isTriangle) return false
    return new Set(this.sides).size === 1
  }

  get isIsosceles(): boolean {
    if (!this.isTriangle) return false
    if (this.isEquilateral) return true
    return new Set(this.sides).size === 2
  }

  get isScalene(): boolean {
    if (!this.isTriangle) return false
    return new Set(this.sides).size === 3
  }
}
