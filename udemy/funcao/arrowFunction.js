/* VANTAGENS:

1 - de escrita mais curta
2 - tem um this já associado ao contexto o qual a função foi escrita
*/

// SINTAXE
// sintaxe de uma funcao normal
let dobro = function (a) {
    return (2 * a)
}
// arrow
dobro = (a) => {
    return (2 * a) 
}
// ou
dobro = (a) => (2 * a)

// provando que o this é constante, associado ao contexto a qual a funcao foi escrita
function Pessoa() {
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// usando bind
// funçao normal
let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // true
comparaComThis(this) // false

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

// função arrow
let comparaComThisArrow = (param) => console.log(this === param)

comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true
comparaComThisArrow(this) // false

comparaComThisArrow = comparaComThisArrow.bind(obj) 
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true
// o this da arrow function tem maior prioridade do que o bind
