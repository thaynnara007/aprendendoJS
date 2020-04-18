const area = (largura, altura) => {
    const area = largura * altura

    if (area > 20) return `Valor acima do permitido: ${area}m2.`
    else return area
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 5, 6))
console.log(area(6, 6))