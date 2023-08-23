/* 
Vamos conhecer uma API do JavaSAcript que nos permite trabalhar com código assíncrono.

Uma promisse é um objeto que tem associado a ele uma função que será executada de forma assíncrona e depois
vai nos devolver um valor de uma forma que consigamos usar.

As Promisses possuem alguns estados possíveis:
pendente - pending
resolvida - resolved
rejeitada - rejected
finalizada - finished (apesar de que os estados acima contam como finalizada)

*/

const p = new Promise((resolved, rejected) => {
    console.log('A Promisse está sendo executada')
    setTimeout(() => {
        if (true) {
            rejected(false)
        }
        console.log('Resolvendo a promisse...')
        resolved(true)
    }, 1000 * 2)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 3)
