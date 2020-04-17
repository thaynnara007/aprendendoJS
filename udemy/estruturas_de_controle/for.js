for (let i = 1; i <= 10; i++) {
    console.log(i)
}

const notas = [1,2,3,4,5,6,5,4,7,8,9,4,10]
for (let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}

console.log()

for (let i in notas){
    console.log(`nota = ${notas[i]}`)
}

console.log()

const pessoa = {
    nome: 'thay',
    sobrenome: 'goncalves',
    idade: 23,
    peso: 46
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}