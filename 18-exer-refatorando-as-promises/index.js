/* 
Vamos reescrever o exercício sobre IMC (aula 12) utilizando
funções async, await e fazendo as devidas adaptações no código. 
*/

async function imc(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject('Arguments must be of type number')
    }
    return weight / Math.pow(height, 2)
}

async function showImc(weight, height) {
    try {
        console.log(`Calculando imc para peso: ${weight} e altura: ${height}`)

        const result = await imc(weight, height)

        console.log(`O resultado do IMC foi ${result.toFixed(2)}.`)

        if (result < 18.5) console.log('Situação: Abaixo do peso ideal')
        else if (result < 25.0) console.log('Situação: Peso normal')
        else if (result < 30) console.log('Situação: Sobrepeso')
        else if (result < 40) console.log('Situação: Obesidade')
        else console.log('Situação: Obesidade grave')
    } catch (error) {
        console.log(error)
    }
}

showImc(69, 1.73)
showImc(71, 1.74)
showImc(48, 1.6)
showImc('sessenta e nove', 1.73)
showImc(82, 1.72)
showImc(119, 1.7)
