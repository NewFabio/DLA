let peso = 90
let altura = 1.81

let imc = peso / (altura ** 2)

console.log(imc.toFixed(2))

if (imc < 18.5) {
    console.log('Você está abaixo do peso!')
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('Você está no peso ideal!')
} else if (imc >= 24.9 && imc < 29.9) {
    console.log('Você esta com sobre peso!')
}