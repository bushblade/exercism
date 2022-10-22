export function commands(num: number): string[] {
  const binary = num.toString(2).split('').reverse()
  const result = ['wink', 'double blink', 'close your eyes', 'jump'].filter(
    (_, indx) => binary[indx] === '1'
  )
  return binary.length < 5 ? result : result.reverse()
}
