export const BufferFullError = Error

export const BufferEmptyError = Error

export default class CircularBuffer<T> {
  private buffer: T[]

  private size: number

  constructor(size: number) {
    this.size = size

    this.buffer = new Array<T>()
  }

  write(value: T): void {
    if (this.isFull()) throw new BufferFullError()

    this.buffer.push(value)
  }

  read(): T {
    if (this.isEmpty()) throw new BufferEmptyError()

    return this.buffer.shift() as T
  }

  forceWrite(value: T): void {
    if (this.isFull()) this.buffer.shift()

    this.write(value)
  }

  clear(): void {
    this.buffer = new Array<T>()
  }

  private isEmpty(): boolean {
    return this.buffer.length === 0
  }

  private isFull(): boolean {
    return this.buffer.length === this.size
  }
}
