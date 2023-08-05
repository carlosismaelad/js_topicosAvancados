/* 
setInterval cria, em vez de um timeout, um intervalo;

Bem parecido com o setTimeout mas com a diferença de que ele executa
repetidas vezes.

Ela também retorna um number e por isso pode ser armazenada dentro de uma 
variável. Com isso podemos chamar a função clearInterval e repassar ela 
como parâmetro.

Podemos chamar a clearInterval dentro da nossa arrow function porque ela fica 
disponível dentro do escopo da função.
*/

console.log('Programa iniciado!')

let seconds = 0

const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos`)
    
    if (seconds > 10){
        clearInterval(intervalId)
        console.log('Tempo esgotado! Encerrando programa.')
    }
}, 1000 * 3)

/* 
Ele vai retornar:
Programa iniciado!
Se passaram 3 segundos
Se passaram 6 segundos
Se passaram 9 segundos...
e a variável seconds será sempre incrementada em +3
*/