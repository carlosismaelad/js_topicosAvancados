async function asyncSum(a, b) {
    return a + b
}

asyncSum(1, 1).then(result => console.log(`1 + 1 é igual a ${result}`))

async function asyncSubtract(a, b) {
    return a - b
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
})

const numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x) {
    return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
})
