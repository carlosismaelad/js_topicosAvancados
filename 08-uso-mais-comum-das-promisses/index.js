/* 
O uso mais comum das promisses é chamarmos ela dentro de
uma outra função. 

Se não for desta maneira, se fizermos como fizemos na aula 07, as promisses
irão se comportar, técnicamente, como códigos síncronos, devido a rapidez
na execução.
*/

function execute() {
    return new Promise((resolve, rejected) => {
        console.log('A promisse está sendo executada')
        setTimeout(() => {
            console.log('Resolvendo a promisse')
            resolve('Resultado')
        }, 1000 * 2)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000)
