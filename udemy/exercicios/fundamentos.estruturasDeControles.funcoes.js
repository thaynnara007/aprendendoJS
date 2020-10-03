// QUESTÃO 01
const calculadora = (num1, num2) => {
    console.log(`Soma: ${num1 + num2}`)
    console.log(`Subtracao: ${num1 - num2}`)
    console.log(`Multiplicacao: ${num1 * num2}`)
    console.log(`Divisao: ${num1 / num2}\n`)  
}

calculadora(1,2)
calculadora(2,1)
// ----------------------------------------------------------------------------------------------

// QUESTÃO 02

const classificaTriangulo = (a, b, c) => {

    if (a === b && b === c && c == a) console.log('Equilatero')
    else if ( a === b || b === c || c === a) console.log('Isosceles')
    else console.log('Escaleno')
}

classificaTriangulo(2, 3, 3)
classificaTriangulo(3, 3, 3)
classificaTriangulo(2, 3, 4)
// ----------------------------------------------------------------------------------------------

// QUESTÃO 03

const pow = (b, e) => Math.pow(b, e)

console.log(pow(5, 6))
console.log(pow(2, 8))
//----------------------------------------------------------------------------------------------

// QUESTÃO 04

const divisao = (num1, num2) => console.log(`resultado: ${num1 / num2}, resto ${num1 % num2}`)

divisao(3, 2)
divisao(4, 6)
divisao(8, 4)
//----------------------------------------------------------------------------------------------

// QUESTÃO 05

const toMoney = (num) => console.log(`R$${num.toFixed(2)}`)

toMoney(0.30000000000000004)
toMoney(0.1 + 0.2)
//----------------------------------------------------------------------------------------------

// QUESTÃO 06
//----------------------------------------------------------------------------------------------

// QUESTÃO 07
const bhaskara = (a, b, c) => {

    const delta = Math.pow(b, 2) - (4 * a * c)
    if (delta < 0) return "Delta negativo"
    else {
        const x1 = ( -b + Math.sqrt(delta)) / (2 * a)
        const x2 = ( -b - Math.sqrt(delta)) / (2 * a)

        return [x1, x2]
    }
}

console.log(bhaskara(4, 2, -6))
console.log(bhaskara(2, 4, 2))
console.log(bhaskara(2, 4, 6))
console.log(bhaskara(3, -5, 12))
//----------------------------------------------------------------------------------------------

// QUESTÃO 08

const resultados = (pontuacoes) => {

    pontuacoes = pontuacoes.split(" ")
    let qntdRecordes = 0
    let recorde = pontuacoes[0]
    let piorResultado = pontuacoes[0]
    let indexPior = 0

    for (let i = 1; i < pontuacoes.length; i++){
        
        let atual = parseInt(pontuacoes[i])

        if (atual > recorde){
            recorde = atual
            qntdRecordes += 1
        }
        else if (atual < piorResultado) {
            piorResultado = atual
            indexPior = i
        }
    }

    return [qntdRecordes, indexPior + 1]
}

console.log(resultados('10 20 20 8 25 3 0 30 1 -1'))
//----------------------------------------------------------------------------------------------

// QUESTÃO 09

const classificaNota = (nota) => {

    if (nota < 38) console.log(`Aluno reprovado com ${nota}`)
    else {

        let newNota = (nota + 1) % 5 === 0 ? nota + 1 : nota
        newNota = (newNota + 2) % 5 === 0 ? newNota + 2 : newNota

        console.log(`Aluno aprovado com ${newNota}`)
    }
}

classificaNota(38)
classificaNota(37)
classificaNota(40)
classificaNota(88)
classificaNota(84)
classificaNota(29)
//----------------------------------------------------------------------------------------------

// QUESTÃO 10

const divisivel3 = (num) => (num % 3 === 0)

console.log(divisivel3(3))
console.log(divisivel3(0))
console.log(divisivel3(7))
console.log(divisivel3(12))
//----------------------------------------------------------------------------------------------

// QUESTÃO 11

const anoBissexto = (ano) => {

    let result = false

    if (ano % 400 === 0) result = true
    else if (ano % 100 === 0) result = false
    else if (ano % 4 === 0) result = true

    return result
}

console.log(anoBissexto(2020))
console.log(anoBissexto(1004))
console.log(anoBissexto(1900))
console.log(anoBissexto(1668))
//----------------------------------------------------------------------------------------------

// QUESTÃO 12

const fatorial = (num) => {

    const fat = [1]
    for (let i = 1; i < num; i++) fat[i] = (i+1) * fat[i - 1]

    return fat[num - 1]
}

console.log(fatorial(5))
console.log(fatorial(2))
console.log(fatorial(1))
console.log(fatorial(8))
console.log(fatorial(10))
console.log(fatorial(20))
//----------------------------------------------------------------------------------------------

// QUESTÃO 13

const diaSemana = (dia) => {

    switch (dia) {
        case 1: case 7: 
            console.log("Fim de semana")
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia de semana')
            break
        default:
            console.log("Dia invalido")
    }
}

diaSemana(1)
diaSemana(2)
diaSemana(3)
diaSemana(4)
diaSemana(5)
diaSemana(6)
diaSemana(7)
diaSemana(8)
//----------------------------------------------------------------------------------------------

// QUESTÃO 14

const mercado = (fruta) => {

    switch (fruta) {
        case 'maca':
            console.log('Nao vendemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi')
            break
        case 'melancia':
            console.log('Aqui esta, sao 3 reais o quilo')
            break
        default:
            console.log('Sei nem que fruta eh essa que vc ta falando detebayo')
    }
}

mercado('maca')
mercado('kiwi')
mercado('melancia')
mercado('laranja')
//----------------------------------------------------------------------------------------------

// QUESTÃO 15

const revenda = (carro) => {

    switch (carro){
        case 'hatch':
            console.log('compra efetuada com sucesso')
            break
        case 'sedan': case 'motocicleta': case 'caminhoneta':
            console.log('Tem certeza que nao prefere este modelo?')
            break
        default:
            console.log('nao trabalhamos com esse tipo de automovel aqui')
    }
}

revenda('hatch')
revenda('sedan')
revenda('datebayo')
//----------------------------------------------------------------------------------------------

// QUESTÃO 16

const calculadora2 = (num1, num2, operacao) => {

    switch (operacao){
        case '+':
            console.log(num1 + num2)
            break
        case '-':
            console.log(num1 - num2)
            break
        case '*':
            console.log(num1 * num2)
            break
        case '/':
            console.log(num1 / num2)
            break
        default:
            console.log(`${operacao} nao eh um operacao conhecida`)
    }
}

calculadora2(4, 5, '+')
calculadora2(4, 5, '-')
calculadora2(4, 5, '*')
calculadora2(4, 5, '/')
//----------------------------------------------------------------------------------------------

// QUESTÃO 17

const aumento = (plano, salario) => {

    const planoA = 0.1
    const planoB = 0.15
    const planoC = 0.2

    switch (plano){
        case 'A':
            console.log(salario * (1 + planoA))
            break
        case 'B':
            console.log(salario * (1 + planoB))
            break
        case 'C':
            console.log(salario * (1 + planoC))
            break
        default:
            console.log('Nao temos esse plano')
    }
}

aumento('A', 1000)
aumento('B', 1000)
aumento('C', 1000)
aumento('D', 1000)
//----------------------------------------------------------------------------------------------

// QUESTÃO 20

const troco = (valor) => {

    const notas100 = Math.trunc(valor / 100)
    let resto = valor % 100 

    const notas50 = Math.trunc(resto / 50)
    resto = resto % 50

    const notas20 = Math.trunc(resto / 20)
    resto = resto % 20

    const notas10 = Math.trunc(resto / 10)
    resto = resto % 10

    const notas5 = Math.trunc(resto / 5)
    resto = resto % 5

    const notas2 = Math.trunc(resto / 2)
    const notas1 = resto % 2

    if (notas100) console.log(`${notas100} notas de 100`)
    if (notas50) console.log(`${notas50} notas de 50`)
    if (notas20) console.log(`${notas20} notas de 20`)
    if (notas10) console.log(`${notas10} notas de 10`)
    if (notas5) console.log(`${notas5} notas de 5`)
    if (notas2) console.log(`${notas2} notas de 2`)
    if (notas1) console.log(`${notas1} notas de 1`)
    console.log()
}

troco(18)
troco(20)
troco(1)
troco(97)
troco(456)
//----------------------------------------------------------------------------------------------

// QUESTÃO 21

const planoSaude = (idade) => {

    if (idade < 10) console.log(180)
    else if (idade >= 10 && idade <= 30) console.log(150)
    else if (idade > 30 && idade <= 60) console.log(195)
    else console.log(230)
}

planoSaude(56)
planoSaude(6)
planoSaude(98)
planoSaude(26)
//----------------------------------------------------------------------------------------------

// QUESTÃO 22
