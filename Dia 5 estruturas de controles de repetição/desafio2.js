//Desafio 02:
//Contagem Regressiva para lançamento de foguete

//Faça a contagem regressiva a partir de 10 até o lançamento de um foguete.

//Ao chegar nos  últimos 3 segundos, é importante dar um aviso, então inclua o texto "Atenção" junto à contagem. Quando a contagem terminar mostre a mensagem: "Lançamento do foguete!"

let contagemRegressiva = 10

while (contagemRegressiva > 0) {
    console.log(`O lançamento será em: ${contagemRegressiva}`)
    contagemRegressiva = contagemRegressiva - 1;

    if (contagemRegressiva == 3) {
        console.log('Atenção!')
    }
}
console.log('Lançamento do foguete!')