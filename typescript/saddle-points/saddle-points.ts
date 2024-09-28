interface SaddlePoint {
  row: number
  column: number
}

export function saddlePoints(grid: number[][]): SaddlePoint[] {
  return grid.reduce((output: SaddlePoint[], row, rowIndx) => {
    row.forEach((tree, colIndx) => {
      // Get the maximum value in the current row
      const maxInRow = Math.max(...row)
      // Get the values of the current column
      const columnValues = grid.map((r) => r[colIndx])
      // Get the minimum value in the current column
      const minInColumn = Math.min(...columnValues)

      // Check if the current tree is the largest in its row and smallest in its column
      if (tree === maxInRow && tree === minInColumn) {
        output.push({ row: rowIndx + 1, column: colIndx + 1 })
      }
    })
    return output
  }, [])
}
