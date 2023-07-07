export class List {
  items: Map<number, any>
  constructor(...values: any[]) {
    this.items = new Map()
    let indx = 0
    for (const value of values) {
      this.items.set(indx, value)
      indx++
    }
  }

  append(listB: List): List {
    let indx = this.items.size
    for (const value of listB.items.values()) {
      this.items.set(indx, value)
      indx++
    }
    return this
  }

  forEach(fn: (el: any) => void): void {
    for (const value of this.items.values()) {
      fn(value)
    }
  }

  concat(list: List): List {
    let indx = this.items.size
    for (const item of list.items.values()) {
      for (const el of item.items.values()) {
        this.items.set(indx, el)
        indx++
      }
    }
    return this
  }

  filter<T>(fn: (el: T) => boolean): List {
    const filtered = new Map()
    let count = 0
    for (const value of this.items.values()) {
      if (fn(value)) {
        filtered.set(count, value)
        count++
      }
    }
    return new List(...filtered.values())
  }

  map<T>(fn: (el: T) => T): List {
    const mapped = new Map()
    let count = 0
    for (const value of this.items.values()) {
      mapped.set(count, fn(value))
      count++
    }

    return new List(...mapped.values())
  }

  foldl<A, E>(fn: (acc: A, el: E) => A, acc: A): A {
    for (const value of this.items.values()) {
      acc = fn(acc, value)
    }

    return acc
  }

  foldr<A, E>(fn: (acc: A, el: E) => A, acc: A): A {
    return this.reverse().foldl(fn, acc)
  }

  reverse(): List {
    const reversedMap = new Map()
    let lastIndx = this.length() - 1
    let indx = 0
    while (lastIndx >= 0) {
      reversedMap.set(indx, this.items.get(lastIndx))
      lastIndx--
      indx++
    }
    return new List(...reversedMap.values())
  }

  length(): number {
    return this.items.size
  }

  public static create(...values: any[]): List {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.
    // You may use the destructuring and spreading (...) syntax from Iterable.
    return new List(...values)
  }
}
