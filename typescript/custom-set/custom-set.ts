export class CustomSet {
  public data: Set<number>

  constructor(initial?: number[]) {
    this.data = new Set(initial)
  }

  empty(): boolean {
    return this.data.size === 0
  }

  contains(element: number): boolean {
    return this.data.has(element)
  }

  add(element: number): typeof this {
    this.data.add(element)
    return this
  }

  subset(other: CustomSet): boolean {
    for (const element of this.data) {
      if (!other.contains(element)) return false
    }
    return true
  }

  disjoint(other: CustomSet): boolean {
    for (const element of other.data) {
      if (this.contains(element)) return false
    }
    return true
  }

  eql(other: CustomSet): boolean {
    if (this.data.size !== other.data.size) return false
    for (const element of this.data) {
      if (!other.data.has(element)) return false
    }
    return true
  }

  union(other: CustomSet): CustomSet {
    return new CustomSet([...Array.from(this.data), ...Array.from(other.data)])
  }

  intersection(other: CustomSet): CustomSet {
    const [shortest, longest] = [other, this].sort(
      (a, b) => a.data.size - b.data.size
    )
    const newCustomSet = new CustomSet()
    for (const element of shortest.data) {
      if (longest.contains(element)) newCustomSet.add(element)
    }
    return newCustomSet
  }

  difference(other: CustomSet): CustomSet {
    const newCustomSet = new CustomSet()
    for (const element of this.data) {
      if (!other.contains(element)) newCustomSet.add(element)
    }
    return newCustomSet
  }
}
