// FUNDAMENTOS

const produto = {}

produto.nome = "FFXV"
produto.tipo = "jogo"
produto.preco = 99.90
produto["desconto clientes vips"] = 0.15   // FEIO

console.log(produto["desconto clientes vips"])
console.log(produto)

const produto2 = {

    nome: 'The Witcher 3',
    tipo: "jogo",
    preco: 70.46
}

console.log(produto2.nome)

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

const Cliente2 = () => {}
console.log(typeof Cliente2)
// console.log(typeof new Cliente2) ERROR

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto)

const Obj = function(nome){
    this.nome = nome
    this.func = () => {
        console.log('executando...')
    }
}

const obj = new Obj("Objeto")
console.log(obj.nome)
obj.func()