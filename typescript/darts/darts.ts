export function score(x: number, y: number): number {
  const distanceFromCenter = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
  if (distanceFromCenter <= 1) return 10
  if (distanceFromCenter <= 5) return 5
  if (distanceFromCenter <= 10) return 1
  return 0
}
