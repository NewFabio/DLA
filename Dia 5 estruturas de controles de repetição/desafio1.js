//Desafio 01:
//Rendimento de Aplicação Financeira

//Suponha que você investiu R$1.000 em uma aplicação financeira que rende 12% ao ano. Usando um loop for, calcule como esse investimento cresce ao longo do tempo, nos próximos 10 anos. Mostre o valor no console por ano.


let investimentoInicial = 1000
let rendimento = 0.12

for (let ano = 1; ano <= 10; ano ++) {
    let valorBruto = investimentoInicial * rendimento * ano
    console.log(`O seu investimento rendeu R$${valorBruto}`)
}