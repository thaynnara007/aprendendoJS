// FUNDAMENTOS
console.log(typeof Object)
class Produto {}
console.log(typeof Produto)

const imprimeSoma = (a, b) => console.log(a + b)

const imprimeSoma2 = function (a, b) { console.log(a + b) }

function imprimeSoma3 (a, b){
    console.log(a + b)
}

imprimeSoma(1,2)
imprimeSoma2(1)
imprimeSoma3(1,2,3,4) // usa lazy function

const retornaSoma = (a, b = 1) => (a + b) // b = 1 é o valor defult caso esse parametro n seja passado
console.log(retornaSoma(9,2))
console.log(retornaSoma(9))