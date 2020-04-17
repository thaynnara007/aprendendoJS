function getRandomNumber (min, max) {

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


do {
    opcao = getRandomNumber(-1, 10)
    console.log(`opcao escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Over!')