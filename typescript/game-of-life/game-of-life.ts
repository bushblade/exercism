type Matrix = number[][]

export class GameOfLife {
  constructor(private matrix: Matrix) {}

  public tick(): void {
    const nextMatrix = this.matrix.map((row, rowIndex) => {
      const newRow = row.map((cell, cellIndex) => {
        const previousRow = this.matrix[rowIndex - 1]
        const currentRow = this.matrix[rowIndex]
        const nextRow = this.matrix[rowIndex + 1]
        let topLeft = 0,
          top = 0,
          topRight = 0,
          left = 0,
          right = 0,
          bottomLeft = 0,
          bottom = 0,
          bottomRight = 0

        if (previousRow && previousRow[cellIndex - 1]) topLeft = 1
        if (previousRow) top = previousRow[cellIndex]
        if (previousRow && previousRow[cellIndex + 1]) topRight = 1
        if (currentRow[cellIndex - 1]) left = 1
        if (currentRow[cellIndex + 1]) right = 1
        if (nextRow && nextRow[cellIndex - 1]) bottomLeft = 1
        if (nextRow) bottom = nextRow[cellIndex]
        if (nextRow && nextRow[cellIndex + 1]) bottomRight = 1

        const numberOfLiveNeighbours = [
          topLeft,
          top,
          topRight,
          left,
          right,
          bottomLeft,
          bottom,
          bottomRight,
        ].reduce((c, acc) => c + acc, 0)

        // - Any live cell with two or three live neighbors lives on.
        if (
          cell &&
          (numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3)
        ) {
          return 1
        }

        // - Any dead cell with exactly three live neighbors becomes a live cell.
        if (!cell && numberOfLiveNeighbours === 3) {
          return 1
        }

        // - All other cells die or stay dead.
        return 0
      })

      return newRow
    })

    this.matrix = nextMatrix
  }

  public state(): Matrix {
    return this.matrix
  }
}
