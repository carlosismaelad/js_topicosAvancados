/* 
setTimeout é uma função disponível globalmente no JavaScript
que serve para criarmos temporizadores, que nada mais são do que
uma forma de esperarmos uma determinada quantidade de tempo para executar 
um bloco de código.

 - Ela recebe dois parâmetros: um handler (ação) e o tempo em milissegundos
1000 milissegundos = 1 segundo, logo temos 3 segundos;

 - Outro detalhe dessa função é que conseguimos armazenar o retorno dessa
função em uma constante. Se passarmo o mouse sobre a função o VsCode traz
uma breve explicação do seu funcionamento e diz que ela retorna um number.
Assim podemos chamar a função clearTimeou passando ela como parâmetro.
*/

console.log('Programa iniciado')

const timeoutId = setTimeout(() => {
    console.log('3 segundo se passaram desde que o programa foi iniciado')
}, 1000 * 3) 

console.log('Programa encerrado')

// encerra o nosso timeout
clearTimeout(timeoutId)
