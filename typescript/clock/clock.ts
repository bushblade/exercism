export class Clock {
  hour = 0
  minute = 0

  constructor(hour: number, minute?: number) {
    this.setHour(hour)
    if (minute) this.setMinute(minute)
  }

  private setMinute(minutes: number): void {
    if (minutes === 60) {
      this.minute = 0
      this.setHour(this.hour + 1)
      return
    }
    if (minutes > 60) {
      this.setHour(this.hour + 1)
      this.setMinute(minutes - 60)
      return
    }
    if (minutes < 0) {
      this.setHour(this.hour - 1)
      this.setMinute(minutes + 60)
      return
    }
    this.minute = minutes
  }

  private setHour(hours: number): void {
    if (hours === 24) {
      this.hour = 0
      return
    }
    if (hours > 24) {
      this.setHour(hours - 24)
      return
    }
    if (hours < 0) {
      this.setHour(hours + 24)
      return
    }
    this.hour = hours
  }

  public toString(): string {
    const hour = this.hour < 10 ? `0${this.hour}` : this.hour
    const minute = this.minute < 10 ? `0${this.minute}` : this.minute
    return `${hour}:${minute}`
  }

  public plus(minutes: number): Clock {
    this.setMinute(this.minute + minutes)
    return this
  }

  public minus(minutes: number): Clock {
    this.setMinute(this.minute - minutes)
    return this
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString()
  }
}
