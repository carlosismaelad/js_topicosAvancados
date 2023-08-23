/* 
Um código síncrono é um código padrão. A maioria dos códigosque escrevemos são síncronos,
o que significa que ele é executado de forma linear, linha após linha, da esquerda para a direita.

*/

function step02() {
    console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 03')

console.log('Passo 04')

// setTimeout roda de forma assíncrona
setTimeout(() => {
    console.log('Passo 05')
}, 1) // mesmo que seja apenas com 1ms

console.log('Passo 06')
