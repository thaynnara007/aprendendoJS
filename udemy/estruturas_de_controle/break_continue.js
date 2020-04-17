
const notas = [1,2,3,4,5,6,5,4,7,8,9,4,10]

for (let i in notas) {
    if (i == 5) break
    console.log(i)
}

for (let j in notas) {
    if (j == 5) continue
    console.log(j)
}

console.log()
// usando o break em laços mais externos

externo: for (let a in notas) {
    for (let b in notas) {
        if (a == 2 && b == 3) break externo
        console.log(a , b)
    }
}

