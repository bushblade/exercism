const isPrime = (n: number, i = 2): boolean => {
  if (n % i === 0 && i < n) return false
  return i < n ? isPrime(n, ++i) : true
}

export class DiffieHellman {
  p: number
  g: number
  constructor(p: number, g: number) {
    if (g > 9000)
      throw new Error('Argument out of range, unspecified by problem')
    if (!isPrime(p) || !isPrime(g))
      throw new Error('Constructor arguments must be prime numbers')
    this.p = p
    this.g = g
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1)
      throw new Error('Private key can not be negative or zero or one')
    if (privateKey === this.p || privateKey > this.p) throw new Error('💩')
    return Math.pow(this.g, privateKey) % this.p
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p
  }
}
