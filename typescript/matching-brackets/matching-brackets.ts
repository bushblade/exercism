const pairs = new Map()
pairs.set('(', ')')
pairs.set('[', ']')
pairs.set('{', '}')

function validate(input: string[]) {
  if (input.length === 0) return true
  const [first, second, ...rest] = input
  if (!pairs.has(first)) return false
  if (pairs.get(first) === second) return validate(rest)
  if (pairs.get(first) === rest.at(-1))
    return validate([second, ...rest.slice(0, -1)])
  return false
}

export const isPaired = (input: string) =>
  validate(input.replace(/[^\[\]\(\)\{\}]/g, '').split(''))
