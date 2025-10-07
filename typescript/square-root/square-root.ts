export const squareRoot = (r: number, n = 1): number => n * n === r ? n : squareRoot(r, n + 1)
