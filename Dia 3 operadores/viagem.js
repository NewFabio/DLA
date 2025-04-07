let valorLitro = 5.9
let distanciaTotal = 100.00
let autonomia = 12

let consumo = distanciaTotal / autonomia

console.log('Você irá precisar de ' + consumo.toFixed(2) + ' Litros de gasolina')

let gastoGasolina = valorLitro * consumo

console.log('Você irá gastar R$' + gastoGasolina.toFixed(2) + ' de gasolina')