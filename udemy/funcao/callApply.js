// Uma forma de chamar e executar funções

function getPreco (imposto = 0, moeda = 'R$' ) {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

// forma convencional
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco: getPreco
}

global.preco = 20,
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

// usando Call e Aplly
const carro = {preco: 49990, desc: 0.25}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// passando parametros para a funcao 
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '&']))