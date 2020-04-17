// ARITMÉTICOS

const a = 7
let b = 3

b += a // b = b + a
b -= a // b = b - a
b /= a // b = b /  a
b %= 1 // b = b % 1

// RELACIONAIS

console.log('01) ', '1' == 1) // true
console.log('02) ', '1' === 1) // false
console.log('03) ', '3' != 3) // false
console.log('04) ', '3' !== 3) // true

console.log('05) ', '2' < 1) // false
console.log('06) ', '2' > 1) // true
console.log('07) ', '2' <= 1) // false
console.log('08) ', 2 >= 1) // true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09) ', d1 === d2) // false, compara endereço de memoria
console.log('10) ', d1 == d2) // false, compara endereço de memoria
console.log('11) ', d1.getTime() === d2.getTime())

console.log('12) ', undefined == null) // true
console.log('13) ', null === undefined) // false

// UNÁRIOS

let num = 1
let num2 = 2

num++ // num = num + 1
--num // precendencia maior

console.log(++num === num2--) // true

// TERNÁRIOS

const resultado = (nota) => nota >= 7 ? 'aprovado' : 'reprovado'