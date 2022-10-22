export function flatten(input: any[]): any[] {
  return input.flat(Infinity).filter((item) => item !== undefined)
}
