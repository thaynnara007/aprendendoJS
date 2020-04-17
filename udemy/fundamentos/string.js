const string = "que se foda esse dracula"
const nome = "thaynnara"

console.log(string.charAt(12))
console.log(string.length) // 24
console.log(string.charAt(25)) // Nao da erro, mt errado isso pco
console.log(string.indexOf('d'))

console.log(string.substring(1)) // [1:]
console.log(string.substring(0,3)) // [:3]

console.log(string.concat(", eu nao queria mesmo"))
console.log(string + ", eu nao queria mesmo")

console.log(string.replace('e', "3")) // substitui pela primeira ocorrencia
console.log(string.replace(/a/g, "4")) // usando regex

console.log(string.split(' '))

// TEMPLATE STRING

// pode quebrar strings
const template = `
    Ola, vc ai
    ${nome},
    so queria dizer que:
    ${string}
`
console.log(template)
console.log(`1 + 1 = ${1 + 1}`)
console.log(typeof template)

up = (texto) => texto.toUpperCase() // nao precisa ter o return se nao tiver dentro de um bloco 

console.log(`sdsd ${up(string.trim())}`)
console.log(up(string.trim()))