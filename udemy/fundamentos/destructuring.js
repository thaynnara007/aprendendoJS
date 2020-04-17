// É uma forma de retirar de dentro e uma estrutura, seus atribuitos

// OBJETOS
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'Rua do cu',
        numero: '777'
    }
}

/* 
    acessa, de dentro do objeto pessoa, os atributos nome e idade.
    é usado chaves pois a estrutura da qual esta sendo acessado os atributos, é um objeto
*/
const {nome, idade} = pessoa 
console.log(nome, idade)
console.log(pessoa)

const {nome: name, idade: age} = pessoa
console.log(name, age)

const {sobrenome = 'sobrenome'} = pessoa // atribuindo um valor defult em caso do atributo acessado n existir na estrutura
console.log(sobrenome)

const {endereco: { rua, numero}} = pessoa
console.log(rua, numero)

// ARRAY

const [a, b, c] = [1, 2, 3]
console.log(a, b , c)

const [, [, nota]] = [[1,2], [3,4]] // feio, melhor acesssar por indice
console.log(nota)

// FUNÇÃO

function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    
    return valor 
}

const obj = {min: 50, max: 100}
console.log(rand(obj))
console.log(rand({min:900}))
console.log(rand({}))
// console.log(rand()) ERRO

function rand2 ([min = 0, max = 1000]){

    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min

    return valor
}

console.log(rand2([50,40]))
console.log(rand2([50]))
console.log(rand2([,40]))
console.log(rand2([]))