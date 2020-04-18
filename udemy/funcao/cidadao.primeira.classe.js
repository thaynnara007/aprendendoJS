// As funções são tratadas com um tipo de dado
// funções de high order

// criando de forma literal. function declaration
function f1 () {}

// atribuindo a uma constante. function expression
const f2 = function () {}

// named function expression
const f3 = function f3 () {}

// arrow function
const f4 = () => {}

// armazenar em um array
const array = [function (a,b) {return a + b}, f1, f2]
console.log(array)
console.log(array[0](2,3))

// armazenar em atributos de objetos
const obj = {}
obj.falar = function () {return 'hello there'}
console.log(obj.falar())

// passando uma função como parâmetro
function run (fun) {
    fun()
}

run(function () {console.log('executando...')})

// retornando uma função como parâmetro. logo uma função pode conter outra função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) // a primeira chamada, soma, retorna uma funcao, q logo em 
//seguida é passado o parametro, 4, para esse funcao
/* mesmo que:
const result = soma(2, 3)
result(4)
*/