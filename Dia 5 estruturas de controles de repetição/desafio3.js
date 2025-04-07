//Desafio 03:
//Cálculo de Juros

//Calcule quanto tempo (em anos) levará para que um investimento inicial dobre, considerando uma taxa de juros de 5% ao ano.

let valorInvestido = 1000
let juros = 0.05
let ano = 0

while (valorInvestido < 2000) {
    let retornoInventimento = valorInvestido * juros
    valorInvestido += retornoInventimento
    ano ++
}
console.log(`O total do rendimento ficou em ${valorInvestido.toFixed(2)}`)
console.log(`Seu rendimento dobrou em ${ano} anos.`)