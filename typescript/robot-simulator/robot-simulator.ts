export class InvalidInputError extends Error {
  constructor(message = 'Invalid Input') {
    super()
    this.message = message
  }
}

type Direction = 'north' | 'east' | 'south' | 'west'
type Coordinates = [number, number]

const directions: Direction[] = ['north', 'east', 'south', 'west']

export class Robot {
  direction: Direction = 'north'
  x = 0
  y = 0

  get bearing(): Direction {
    return this.direction
  }

  get coordinates(): Coordinates {
    return [this.x, this.y]
  }

  place({
    x,
    y,
    direction,
  }: {
    x: number
    y: number
    direction: string
  }): void {
    if (!['north', 'east', 'south', 'west'].includes(direction))
      throw new InvalidInputError('Not a valid direction')
    this.x = x
    this.y = y
    this.direction = direction as Direction
  }

  evaluate(instructions: string): void {
    for (const instruction of instructions) {
      if (instruction === 'R') {
        const nextDirectionRight =
          directions[directions.indexOf(this.direction) + 1]
        this.direction = nextDirectionRight ? nextDirectionRight : 'north'
      }
      if (instruction === 'L') {
        const nextDirectionLeft =
          directions[directions.indexOf(this.direction) - 1]
        this.direction = nextDirectionLeft ? nextDirectionLeft : 'west'
      }
      if (instruction === 'A') {
        // it's an 'A' so advance
        if (this.direction === 'north') {
          this.y++
        }
        if (this.direction === 'east') {
          this.x++
        }
        if (this.direction === 'south') {
          this.y--
        }
        if (this.direction === 'west') {
          this.x--
        }
      }
    }
  }
}
