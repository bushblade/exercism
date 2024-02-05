export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}

export class BankAccount {
  private _balance = 0
  private active = false

  private checkIfActive(): void {
    if (!this.active) throw new ValueError()
  }

  open(): void {
    if (this.active) throw new ValueError()
    this.active = true
  }

  close(): void {
    this.checkIfActive()
    this._balance = 0
    this.active = false
  }

  deposit(amount: number): void {
    this.checkIfActive()
    if (amount < 0) throw new ValueError()
    this._balance += amount
  }

  withdraw(amount: number): void {
    this.checkIfActive()
    if (amount > this._balance || amount < 0) throw new ValueError()
    this._balance -= amount
  }

  get balance(): number {
    this.checkIfActive()
    return this._balance
  }

  set balance(_) {
    throw new Error('Bank account error')
  }
}
