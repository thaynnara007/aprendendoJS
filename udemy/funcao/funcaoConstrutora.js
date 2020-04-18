function Carro (velocidadeMax = 200, delta = 5) {

    // atributo privado. Tudo que n for declarado com o this, assume caráter privado
    let velocidadeAtual = 0

    // metodo publico.
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) velocidadeAtual += delta
        else velocidadeAtual = velocidadeMax
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const simon = new Carro
simon.acelerar()
console.log(simon.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())