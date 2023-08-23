/* 
O then serve para lidarmos com uma promisse quando ela é resolvida.
*/

function execute() {
    return new Promise((resolve, rejected) => {
        console.log('A promisse está sendo executada')
        setTimeout(() => {
            if (false) {
                rejected('A promisse foi rejeitada') // esse cód nunca será executado porque passamos um false no if
            } else {
                console.log('Resolvendo a promisse')
                resolve(42)
            }
        }, 1000 * 2)
    })
}

const p = execute()

p.then(result => {
    console.log(`A promisse foi resolvida. O resultado foi ${result}`)
})
    .catch(err => {
        console.log(`A Promisse foi rejeitada. Motivo: ${err}`)
    })
    .finally(() => {
        console.log('A promisse foi finalizada')
    })
