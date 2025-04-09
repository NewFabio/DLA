//Desafio 01:

//Crie uma aplicação simples que simule a gestão de duas contas bancárias. Para isso, você precisará criar variáveis para controlar o saldo das contas e o limite de crédito.

//1.Calcular o saldo total das contas. =V
//2.Exibir um alerta se alguma conta estiver sem saldo ou utilizando o limite. =V
//3.Permitir depósitos em uma das contas. =V
//4.Permitir débitos em uma das contas. =V
//5.Permitir trânsferências de uma conta para outra, desde que haja saldo disponível. =V
//6.Converter o saldo de reais (R$) para dólares (U$$). =V
//7.Exibir o limite disponível das contas. =V

// REGRAS
//As contas compartilham de um  limite, e começam com 0. =V
//Quando o saldo total das contas alcançar 1.000, o limite será de 10%. =V
//Quando fizer depósito em uma conta e ela estiver utilizando o limite, desconte 15%.

let contaFabio = 1000
let contaKeli = 1000
let saldoTotal = contaFabio + contaKeli
let limiteContaFabio = 0
let limiteContaKeli = 0

//Atualizar o Saldo total das contas somadas apos depositos
saldoTotal = contaFabio + contaKeli

//Permitindo debitos
let retiradaFabio = 0
let retiradaKeli = 0
contaFabio = contaFabio - retiradaFabio
contaKeli = contaKeli - retiradaKeli

//Permitindo transferência de Fabio para keli
if (contaFabio == 0) {
        console.log('Nao tem saldo suficiente!')
} else {
        console.log('TRANSFERENCIA PARA KELI')
        let transferencia = 0
        contaFabio = contaFabio - transferencia
        contaKeli = contaKeli + transferencia
}

//Permitindo transferência de Keli para Fabio
if (contaKeli == 0) {
    console.log('Nao tem saldo suficiente!')
} else {
    console.log('TRANSFERENCIA PARA FABIO')
    let transferencia = 0
    contaKeli = contaKeli - transferencia
    contaFabio = contaFabio + transferencia
}

//Verifica se a conta de fabio esta zerada
if (contaFabio == 0) {    
    conta1 = 'da conta de Fabio'
    console.log(`O saldo ${conta1} esta em zerado.`)
}

//Verifica se a conta de fabio esta zerada
if (contaKeli == 0) {
    conta2 = 'da conta de Keli'
    console.log(`O saldo ${conta2} esta zerado.`)
}

//Verifica se alcançou o limite da conta e aplica o juros para Fabio
if (contaFabio >= 1000) {
    limiteContaFabio = 0.10
    limiteFabio = 'Fabio alcançou o limite da conta'    
    console.log(`${limiteFabio} e agora esta com juros de 10%`)
}

//Verifica se alcançou o limite da conta e aplica o juros para Keli
if (contaKeli >= 1000) {
    limiteContaKeli = 0.10
    limiteKeli = 'Keli alcançou o limite da conta'
    console.log(`${limiteKeli} e agora esta com juros de 10%`)
} 

//Para realizar deposito na conta de Fabio
let depositoFabio = 200;
if (limiteContaFabio == 0.10) {
    let desconto = depositoFabio - (depositoFabio * 0.15)
    contaFabio = desconto + contaFabio
    console.log(`Você depositou R$${depositoFabio}, porem foi descontado 15% de taxa, por isso seu deposito ficou em R$${desconto}`)
} else {
    contaFabio = depositoFabio + contaFabio
    console.log(`Você depositou R$${depositoFabio} para Fabio.`)
}

//Para realizar deposito na conta de Keli
let depositoKeli = 200;
if (limiteContaFabio == 0.10) {
    let desconto = depositoKeli - (depositoKeli * 0.15)
    contaKeli = desconto + contaKeli
    console.log(`Você depositou R$${depositoKeli}, porem foi descontado 15% de taxa, por isso seu deposito ficou em R$${desconto}`)
} else {
    contaKeli = depositoKeli + contaKeli
    console.log(`Você depositou R$${depositoKeli} para Keli.`)
}

console.log(`O saldo de Fabio é R$${contaFabio.toFixed(2)}`)
console.log(`O saldo de Fabio é R$${contaKeli.toFixed(2)}`)

//Atualizar o saldo total das contas somadas apos retirada
saldoTotal = contaFabio + contaKeli

//Convertendo valor para dolar
let dolar = 5.60
contaFabio = contaFabio / dolar
contaKeli = contaKeli / dolar

console.log(`O seu saldo em dolar é $${contaFabio.toFixed(2)}`)
console.log(`O seu saldo em dolar é $${contaKeli.toFixed(2)}`)
console.log(`O saldo total das contas é R$${saldoTotal}`)