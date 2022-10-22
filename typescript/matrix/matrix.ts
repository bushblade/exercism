export class Matrix {
  matrix: Array<Array<number>>
  constructor(input: string) {
    this.matrix = input
      .split('\n')
      .map((s) => s.split(' ').map((char) => parseInt(char)))
  }

  get rows(): Array<Array<number>> {
    return this.matrix
  }

  get columns(): Array<Array<number>> {
    // turn rows into columns
    return this.matrix[0].map((_, colIndex) =>
      this.matrix.map((row) => row[colIndex])
    )
  }
}

const myMatrix = new Matrix('1')
console.log(myMatrix.rows[0])
