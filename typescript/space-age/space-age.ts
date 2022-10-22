const multipliers: { [key: string]: number } = {
  mercury: 0.2408477,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

function secondsToEarthYear(seconds: number): number {
  return seconds / 31556952
}

export function age(planet: string, seconds: number): number {
  return Number((secondsToEarthYear(seconds) / multipliers[planet]).toFixed(2))
}
