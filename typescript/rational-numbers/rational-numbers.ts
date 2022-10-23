export class Rational {
  a: number
  b: number
  constructor(a: number, b: number) {
    const gcd = this.gcd(a, b)
    this.a = a / gcd
    console.log(this.a)
    this.b = b / gcd
    if (this.b < 0) {
      this.b = Math.abs(this.b)
      this.a = -this.a
    }
  }

  gcd(a: number, b: number): number {
    a = Math.abs(a)
    b = Math.abs(b)
    return b ? this.gcd(b, a % b) : a
  }

  // The sum of two rational numbers
  // `r₁ = a₁/b₁` and `r₂ = a₂/b₂`
  // is `r₁ + r₂ = a₁/b₁ + a₂/b₂ = (a₁ * b₂ + a₂ * b₁) / (b₁ * b₂)`.
  add(r2: Rational): Rational {
    return new Rational(this.a * r2.b + r2.a * this.b, this.b * r2.b)
  }

  // The difference of two rational numbers
  // `r₁ = a₁/b₁` and `r₂ = a₂/b₂`
  // is `r₁ - r₂ = a₁/b₁ - a₂/b₂ = (a₁ * b₂ - a₂ * b₁) / (b₁ * b₂)`.
  sub(r2: Rational): Rational {
    return new Rational(this.a * r2.b - r2.a * this.b, this.b * r2.b)
  }

  // The product (multiplication) of two rational numbers
  // `r₁ = a₁/b₁` and `r₂ = a₂/b₂`
  // is `r₁ * r₂ = (a₁ * a₂) / (b₁ * b₂)`.
  mul(r2: Rational): Rational {
    return new Rational(this.a * r2.a, this.b * r2.b)
  }

  // Dividing a rational number `r₁ = a₁/b₁` by another `r₂ = a₂/b₂`
  // is `r₁ / r₂ = (a₁ * b₂) / (a₂ * b₁)` if `a₂` is not zero.
  div(r2: Rational): Rational {
    return new Rational(this.a * r2.b, r2.a * this.b)
  }

  abs(): Rational {
    return new Rational(Math.abs(this.a), Math.abs(this.b))
  }

  // Exponentiation of a rational number `r = a/b` to a non-negative integer power `n` is
  // `r^n = (a^n)/(b^n)`.
  exprational(n: number): Rational {
    return new Rational(Math.pow(this.a, n), Math.pow(this.b, n))
  }

  // Exponentiation of a real number `x` to a rational number
  // `r = a/b`
  // is `x^(a/b) = root(x^a, b)`,
  // where `root(p, q)` is the `q`th root of `p`.
  expreal(n: number): number {
    // NOTE: this is the one I don't understand, ended up using someone elses code
    // here.
    return Math.pow(n, 1 / this.b) ** this.a
  }

  reduce(): Rational {
    return this
  }
}
console.log(new Rational(3, -9))
