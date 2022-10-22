export function hey(message: string): string {
  const trimmed = message.trim().replace(/[0-9]/g, '')
  const noLetters = trimmed.replace(/\W/g, '').length === 0
  const isEmpty = trimmed.length === 0
  const isYelling = !isEmpty && message === message.toUpperCase()
  const isQuestion = trimmed.endsWith('?')

  if (isYelling && isQuestion && !noLetters)
    return `Calm down, I know what I'm doing!`
  if (isQuestion) return 'Sure.'
  if (isEmpty) return 'Fine. Be that way!'
  if (isYelling && !noLetters) return 'Whoa, chill out!'

  return 'Whatever.'
}
