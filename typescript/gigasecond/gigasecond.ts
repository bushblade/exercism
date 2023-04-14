export class Gigasecond {
  constructor(public startDate: Date) {}

  public date(): Date {
    const oneGigaSeconds = Math.pow(10, 9)
    return new Date(this.startDate.getTime() + oneGigaSeconds * 1000)
  }
}
