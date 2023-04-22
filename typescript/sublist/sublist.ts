enum Result {
  equal = 'equal',
  unequal = 'unequal',
  sublist = 'sublist',
  superlist = 'superlist',
}

export class List {
  public list: number[]

  constructor(...args: number[]) {
    this.list = [...args]
  }

  private twoArrsEqual(arrOne: number[], arrTwo: number[]): boolean {
    return (
      arrOne.length === arrTwo.length && arrOne.every((n, i) => n === arrTwo[i])
    )
  }

  private shortArrIsSubOfLongArr(
    shortArr: number[],
    longArr: number[]
  ): boolean {
    const sliceOfLong = longArr.slice(0, shortArr.length)
    if (shortArr.length > sliceOfLong.length) return false
    if (this.twoArrsEqual(shortArr, sliceOfLong)) return true
    return this.shortArrIsSubOfLongArr(shortArr, longArr.slice(1))
  }

  compare(listB: List): Result {
    if (this.twoArrsEqual(this.list, listB.list)) return Result.equal

    const [shortest, longest] = [this.list, listB.list].sort(
      (a, b) => a.length - b.length
    )

    const isSubOrSuper = this.shortArrIsSubOfLongArr(shortest, longest)

    if (isSubOrSuper) {
      return shortest.length === this.list.length
        ? Result.sublist
        : Result.superlist
    }

    return Result.unequal
  }
}
