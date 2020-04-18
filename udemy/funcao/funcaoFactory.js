function CriaPessoa (nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

const mia = CriaPessoa('Mia', 'Corvere')
console.log(mia)