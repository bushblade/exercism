export class ComplexNumber {
  private a: number
  private b: number

  constructor(real: number, imaginary: number) {
    this.a = real
    this.b = imaginary
  }

  public get real(): number {
    return this.a
  }

  public get imag(): number {
    return this.b
  }

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.a + other.real, this.b + other.imag)
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.a - other.real, this.b - other.imag)
  }

  public div(other: ComplexNumber): ComplexNumber {
    // alias parts
    const a = this.a,
      b = this.b,
      c = other.a,
      d = other.b
    const realPart = (a * c + b * d) / (c * c + d * d)
    const imagPart = (b * c - a * d) / (c * c + d * d)
    return new ComplexNumber(realPart, imagPart)
  }

  public mul(other: ComplexNumber): ComplexNumber {
    // alias parts
    const a = this.a,
      b = this.b,
      c = other.a,
      d = other.b
    // calclulate 4 parts
    const ac = a * c
    const bd = b * d
    const ad = a * d
    const bc = b * c

    const realPart = ac - bd
    const imagPart = ad + bc
    return new ComplexNumber(realPart, imagPart)
  }

  public get abs(): number {
    return Math.sqrt(this.a * this.a + this.b * this.b)
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.a, this.b === 0 ? 0 : -this.b)
  }

  public get exp(): ComplexNumber {
    // Calculate e^a (where a is the real part of the complex number)
    const eToA = Math.exp(this.a)

    // Real part: e^a * cos(b)
    const realPart = eToA * Math.cos(this.b)

    // Imaginary part: e^a * sin(b)
    const imagPart = eToA * Math.sin(this.b)

    // Return the result as a new complex number
    return new ComplexNumber(realPart, imagPart)
  }
}
