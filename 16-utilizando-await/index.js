async function asyncSum(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return Promise.reject('Arguments for sum must be of type number')
    }

    return a + b
}

/* Usando o then

async function executeSum() {
    asyncSum(50, 33).then(result => {
        console.log(result)
    })
} 
*/

// Usando await
async function executeSum() {
    try {
        const result = await asyncSum(50, null)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

executeSum()
