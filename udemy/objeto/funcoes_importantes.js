const pessoa = {
    nome: 'Beatriz',
    sobrenome: 'Soria',
    idade: 18,
}

console.log(Object.keys(pessoa)) // retorna, em um array, todas as chaves
console.log(Object.values(pessoa)) // retorna, em um array, todos os valores
console.log(Object.entries(pessoa)) // retorna, em um array, os pares chave-valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // coloca a propriedade como enumeravel
    writable: false, // congela a propriedade, nao sendo permitido altera-la
    value: '01/01/1962'
})

pessoa.dataNascimento = '01/01/2020'
console.log(pessoa)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4 }
const obj = Object.assign(dest, o1, o2)
// o primeiro parametro, dest, vai ser o objeto de destino, e os demais parametros, serao os
// objetos que terão seus atributos concatenados com o objeto de destino
console.log(obj)