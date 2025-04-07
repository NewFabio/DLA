//Desafio 04:
//Compra Parcelada

//Você comprou um produto e optou por parcelar o valor em 12x sem juros. Escreva um código que imprima o valor de cada parcela e o valor restante a ser pago.

let preco = 1500
let parcelas = 12

for (let parcela = 1; parcela <= parcelas; parcela++) {
    let valorParcela = preco / parcelas
    console.log(`Parcela ${parcela}: R$${valorParcela.toFixed(2)}`)
    let restante = preco - (valorParcela * parcela)
    console.log(`Valor restante: R$${restante.toFixed(2)}`)
}