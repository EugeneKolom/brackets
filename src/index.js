module.exports = function check(str, bracketsConfig) {
  const bracketsDict = Object.fromEntries(bracketsConfig.map(([a, b]) => [b, a]))
  const leftBrackets = Object.values(bracketsDict)

  const queue = []

  for (const bracket of str) {
    if (bracket in bracketsDict && (!leftBrackets.includes(bracket) || queue.at(-1) === bracket)) {
      const lastBracket = queue.pop()
      if (lastBracket != bracketsDict[bracket]) return false
    } else {
      queue.push(bracket)
    }
  }
  return !queue.length
}
