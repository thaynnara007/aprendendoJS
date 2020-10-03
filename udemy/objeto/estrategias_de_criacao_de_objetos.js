// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome // usando o this, implica que o atributo pertence a instancia, logo, publico
    this.getPrecoDesconto = () => preco * (1 + desc)
}

const p1 = new Produto('p1', 3, 0.1)
const p2 = new Produto('p2', 2, 0.2)
console.log(p1.nome, p2.nome)
console.log(p1.preco, p2.desc)

// Funçao Factory
function criaFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criaFuncionario('marisita', 450, 2)
console.log(f1.nome, f1.salarioBase, f1.faltas, f1.getSalario())

// Object create
const pessoa = Object.create(null)
pessoa.nome = 'beatriz'
console.log(pessoa)

// A partir de um Json
const fromJson = JSON.parse('{"info": "cu"}')
console.log(fromJson.info)