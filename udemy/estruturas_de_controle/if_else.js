function boaNota(nota) {
    if (nota >= 7) console.log(`Aprovado com ${nota}`)
    else if ( nota < 7 && nota >= 6) console.log(`Vai para final com ${nota}`)
    else console.log(`Reprovado com ${nota}`)
}

function seVerdadeiro(valor) {
    if (valor) console.log('Verdadeiro')
    else console.log('Falso')
}

seVerdadeiro([])
seVerdadeiro([1])
seVerdadeiro({})
seVerdadeiro({a:2})
seVerdadeiro(0)
seVerdadeiro(-1)
seVerdadeiro('')
seVerdadeiro('ss')

function teste(valor) {
    if (valor > 7); {
        console.log(valor)
    }

    /*
    mesma coisa que:
    if (valor > 7);

    {
        console.log(valor)
    }
    */
}
teste(6)
teste(8)

Number.prototype.entre = (inicio, fim) => (this >= inicio && this <= fim)

const imprimeResultado = (nota) => {
    
    if (nota.entre(9, 10)) console.log('Quadro de honra')
    else if (nota.entre(7, 8.99)) console.log('Aprovado')
    else if (nota.entre(5, 6.99)) console.log('Recuperacao')
    else console.log('Reprovado')
}