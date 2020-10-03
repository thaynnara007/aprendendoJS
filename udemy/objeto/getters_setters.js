const sequencia = {
    // um padrão para significar q eh um atributo criado com a pretenção de ser acessada 
    // apenas dentro da função
    _valor1: 1, 
    get valor() {return this._valor1++},
    set valor( new_valor ) {
        if (new_valor > this._valor1) this._valor1 = new_valor
    }
}

console.log(sequencia._valor1, sequencia.valor, sequencia.valor)
sequencia.valor = 4
sequencia.valor = 1
console.log(sequencia)