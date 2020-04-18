/* 
Funções callback, fazem uso do padrão observer;

Observer: é um padrão de projeto de software em que um objeto, chamado “subject”, 
mantém uma lista de seus dependentes, chamados de “observers”, e os notifica automaticamente 
de eventuais mudanças de estado, geralmente, chamando um dos seus métodos;
O padrão Observer é também uma peça-chave no familiar padrão de arquitetura 
Model View Controller (MVC).

Callback: uma função que é passado para outra, e quando determinado evento acontecer
a callback vai ser desparada/chamada d evolta
*/

const fabricantes = ['Mercedes', 'audi', 'BMW', 'Ford']

const imprimir = (nome, indice) => console.log(`${indice + 1}. ${nome}`)

/** O forEach faz uso de uma callback, passada como parametro, pois toda vez que um elemento
 * do array é percorrido, o evento, a função é executada
 */
fabricantes.forEach(imprimir)
console.log()
fabricantes.forEach( (nome) => console.log(nome))


// Extraindo as notas menores do que 7, não usando, primeiramente, callback, e usando em seguida
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.2, 9.0]

// sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) notasBaixas.push(notas[i])
}
console.log(notasBaixas)

// com callback
notasBaixas = notas.filter( (nota) => nota < 7 )
console.log(notasBaixas)

// Criando funções que trabalham em cima de uma callback

// FOR EACH
const myforEach = (array, callback) => {
    for (let i =0; i < array.length; i++){
        callback(array[i], i)
    }
}

myforEach(fabricantes, imprimir)
myforEach(notas, (nota, i) => {
    if (nota < 7) console.log(`${i + 1} aluno reprovado com nota ${nota}`)
    else console.log(`${i + 1} aluno aprovado com nota ${nota}`)
})


// FILTER
const myFilter = (array, callback) => {

    const newArray = []
    for (let i in array){
        if (callback(array[i])) newArray.push(array[i])
    }

    return newArray
}

const newNotas = myFilter(notas, (nota) => nota < 7)
console.log(newNotas)

