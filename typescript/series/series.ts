export class Series {
  private series: string

  constructor(series: string) {
    if (series.length === 0) throw new Error('series cannot be empty')
    this.series = series
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength > this.series.length)
      throw new Error('slice length cannot be greater than series length')
    if (sliceLength === 0) throw new Error('slice length cannot be zero')
    if (sliceLength < 0) throw new Error('slice length cannot be negative')

    return Array.from({ length: this.series.length - sliceLength + 1 }).reduce(
      (acc: number[][], _, i) => {
        acc.push(
          this.series
            .substring(i, sliceLength + i)
            .split('')
            .map(Number)
        )
        return acc
      },
      []
    )
  }
}

console.log(new Series('9142').slices(2))
