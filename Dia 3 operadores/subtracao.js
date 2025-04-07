//exercicio 01

let perfume = 100.00
let almoco = 30.00
let cinema = 40.00
let pipoca = 60.00
let estacionamento = 30.00

let totalGasto = perfume + almoco + cinema + pipoca + estacionamento

let valorCorrigido = totalGasto - estacionamento

console.log('O total gasto foi: R$' + valorCorrigido.toFixed(2))

//exercicio 02

let nascimento = 1991
let anoAtual = 2025
let idade = anoAtual - nascimento

console.log('Você tem: ' + idade + ' anos')

//exercicio 03

let galao = 200.00
let livros = 30.00
let varinha = 10.00
let pet = 5.00
let vassoura = 20.00
let uniforme = 15.00
let outroItens = 30.00

console.log('Você possui R$' + galao.toFixed(2) +' em seu cartão')

let compra1 = galao - livros
console.log('Você fez uma compra, seu saldo era R$' + galao.toFixed(2) + ', agora é R$' + compra1.toFixed(2) + ' total da compra foi R$' + livros.toFixed(2))
let compra2 = compra1 - varinha
console.log('Você fez uma compra, seu saldo era R$' + compra1.toFixed(2) + ', agora é R$' + compra2.toFixed(2) + ' total da compra foi R$' + varinha.toFixed(2))
let compra3 = compra2 - pet
console.log('Você fez uma compra, seu saldo era R$' + compra2.toFixed(2) + ', agora é R$' + compra3.toFixed(2) + ' total da compra foi R$' + pet.toFixed(2))
let compra4 = compra3 - vassoura
console.log('Você fez uma compra, seu saldo era R$' + compra3.toFixed(2) + ', agora é R$' + compra4.toFixed(2) + ' total da compra foi R$' + vassoura.toFixed(2))
let compra5 = compra4 - uniforme
console.log('Você fez uma compra, seu saldo era R$' + compra4.toFixed(2) + ', agora é R$' + compra5.toFixed(2) + ' total da compra foi R$' + uniforme.toFixed(2))
let compra6 = compra5 - outroItens
console.log('Você fez uma compra, seu saldo era R$' + compra5.toFixed(2) + ', agora é R$' + compra6.toFixed(2) + ' total da compra foi R$' + outroItens.toFixed(2))
console.log('Seu saldo atual é R$' + compra6.toFixed(2))