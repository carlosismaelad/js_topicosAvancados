function waitFor(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const number = [4, 5, 9, 13, 77]

// Promise.all(squares).then(results => {
//     console.log(results)
// })

async function execute() {
    console.time('map')
    const squares = await Promise.all(
        number.map(async number => {
            await waitFor(2)
            return number * number
        })
    )
    console.log(squares)

    console.timeEnd('map')
}

execute()
