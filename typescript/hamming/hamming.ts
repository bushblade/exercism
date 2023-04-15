export function compute( left: string, right: string, distance: number = 0): number {
  if (left.length !== right.length)
    throw new Error('DNA strands must be of equal length.')
  if (left[0] !== right[0]) distance++
  return left.slice(1).length > 0
    ? compute(left.slice(1), right.slice(1), distance)
    : distance
}
