// FUNDAMENTOS

const array = [1, 8.9, 5, 9.8, 0, "cu", true, NaN]

console.log(array.length) // 8
console.log(array[7], array[8])

array[8] = Infinity
array.push({atributo: 3}, null)

console.log(array)
console.log(typeof Array)
array.pop()
console.log(array)

delete array[5]
console.log(array)
console.log(array[5])