//Desafio 01:
//Crie uma função que utiliza o peso e a altura como parâmetros para calcular o IMC de uma pessoa.

function IMC (peso, altura){
    let imc = peso / (altura * 2)
    return imc.toFixed(2)
}

console.log(IMC(85,1.81))