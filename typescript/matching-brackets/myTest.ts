const input = '{ }'
input.replace(/[^\[\]\(\)\{\}]/g, '')

console.log('Input is: ', input) // '{ }'
console.log('Input length is: ', input.length) // 3
