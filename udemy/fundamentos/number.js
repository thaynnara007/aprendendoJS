const peso = 1.0
const peso2 = Number('2.0')
const peso3 = 2.3345

console.log(peso, peso2)
console.log(Number.isInteger(peso))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

console.log(peso3.toFixed(2))  // numero de casas decimais
console.log(peso3.toString())
console.log(typeof peso3)
console.log(typeof Number)

// ALGUNS CUIDADOS
console.log(7 / 0)
const a = '7' / 1
console.log(a)
console.log(typeof a)
console.log('a' * 2)
console.log(0.1 + 0.7)
console.log((7).toString())
//console.log(7.toString()) erro

// MATH
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)

