const valor = 'global'

function f1 () {
    console.log(valor)
}

function f2 () {
    const valor = 'local'
    f1()
}

f2() // global

// as funções em js sabem o contexto em que foram declarada

/** CLOSURES:
 * é o escopo, criado a partir do contexto quando a função é declarada.
 * Esse escopo permite que a função acesse e manipule variáveis externas a função
 */

function fora() {
    const valor = 'local'

    function dentro () {
        return valor
    }

    return dentro
}

const dentro = fora()
console.log(dentro())