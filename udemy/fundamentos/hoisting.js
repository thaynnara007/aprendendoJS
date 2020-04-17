console.log('a = ', a)  // a = undefined
var a = 3
console.log('a = ', a) // a = 3

/*
    Houve o içamento da variavel a para o contexto da linha acima, como se o seguinte
    tivesse acontecido:
    var a
    console.log('a = ', a)  
    a = 3
    console.log('a = ', a)

    Quando em outras linguagens esse bloco de código daria um erro dizendo q a variavel a 
    não existe
*/

console.log('b = ', b)  // ERROR
let b = 3
console.log('b = ', b) // a = 3