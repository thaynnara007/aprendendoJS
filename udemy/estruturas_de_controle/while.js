function getRandomNumber (min, max) {

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    
    opcao = getRandomNumber(-1, 10)
    console.log(`opcao escolhida foi ${opcao}.`)
}

console.log('Over!')