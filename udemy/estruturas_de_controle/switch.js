const imprimeResultado = (nota) => {

    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5:
            console.log('Recuperacao')
            break
        case 4: case 3: case 2: case 1: case 0: 
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')
    }
}

imprimeResultado(9)
imprimeResultado(7)
imprimeResultado(6.5)
imprimeResultado(3.4)
imprimeResultado(-1)
imprimeResultado('dd')