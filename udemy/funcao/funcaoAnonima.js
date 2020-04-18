// SINTAXE
// uma função anônima armazenada dentro de um variável
const soma = function (a, b) {
    return a+ b
}

const imprimeResultado = function (x, y, operacao = soma) {
    console.log(operacao(x,y))
}

imprimeResultado(3, 2)
imprimeResultado(3, 2, (a, b) => a * b)