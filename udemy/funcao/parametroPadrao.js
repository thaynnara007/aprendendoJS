// forma 1
function soma1 (a, b , c) {
    
    a = a || 1
    b = b || 1
    c = c || 1

    return (a + b + c)
}

console.log(soma1(), soma1(5), soma1(2, 2), soma1(0, 0, 0)) // 0 = false

// forma 2, 3 e 4
function soma2 (a, b, c) {

    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1  // se exister o argumento de indice um, entao...
    c = isNaN(c) ? 1 : c

    return (a + b + c)
}

console.log(soma2(), soma2(5), soma2(2, 2), soma2(0, 0, 0))

// forma 5, e melhor
function soma3 (a = 1, b = 1, c = 1){
    return (a + b + c )
}

console.log(soma3(), soma3(5), soma3(2, 2), soma3(0, 0, 0))