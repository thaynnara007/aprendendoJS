let isAtivo = false
isAtivo = true

isAtivo = 1
console.log(!isAtivo) // false
console.log(!!isAtivo) // true

console.log('os verdadeiros...')
console.log(!!1)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 4))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = null))

// utilidades
console.log(!!(null || '' || undefined || "eu"))
let nome = null
console.log(nome || "desconhecido")
