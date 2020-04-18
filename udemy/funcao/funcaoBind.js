const pessoa = {
    saudacao: 'Hello there',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // undefined, pois o this esta associada a um contexto diferente do de pessoa

// defini o contexto o qual a funcao deve ser executada
const falarPessoa = pessoa.falar.bind(pessoa) 
falarPessoa()


// Artificios usados para manter o contexto do this em pessoa e nao no temporizador 
// dentro de setInterval 
function Pessoa() {
    this.idade = 0
    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa

// ou 

function Pessoa2() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa2