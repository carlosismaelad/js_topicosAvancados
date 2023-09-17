async function asyncSum(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return Promise.reject('Arguments for sum must be of type number')
    }

    return a + b
}

async function asyncSubtract(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return Promise.reject(
            'Arguments for subtraction must be of type number'
        )
    }
    return a - b
}

asyncSum(50, 33)
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })

asyncSubtract(50, null)
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
