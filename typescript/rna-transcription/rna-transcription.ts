const nucleotides: { [key: string]: string } = {
  G: `C`,
  C: `G`,
  T: `A`,
  A: `U`,
}

function transcribe(nc: string): string {
  if (!nucleotides[nc]) throw new Error('Invalid input DNA.')
  return nucleotides[nc]
}
export function toRna(input: string): string {
  return input.split('').reduce((acc, nc) => (acc += transcribe(nc)), '')
}
