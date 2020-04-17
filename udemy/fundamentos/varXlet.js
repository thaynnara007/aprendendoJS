// VAR
const array = []

for(var i = 0; i < 10; i++){
    array.push(() => console.log(i))
}

array[0]() // 10
array[8]() // 10

// LET
const array2 = []

for(let i = 0; i < 10; i++){
    array2.push(() => console.log(i))
}

array2[0]() // 0
array2[8]() // 8