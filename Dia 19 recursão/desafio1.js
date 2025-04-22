//Desafio 01:
//Parcelas Fatura Cartão de Crédito

//Crie um sistema que simula o cálculo do valor total de uma fatura de cartão de crédito.
//O sistema deve considerar compras feitas no cartão, sendo que algumas delas podem ser parceladas, e cada parcela pode ter sub-parcelas (compras dentro de compras).
//Utilize recursão para calcular o valor total da fatura, levando em consideração todas as compras, parcelas e sub-parcelas, até o nível mais profundo.

//Estrutura Json da fatura
const fatura = [
    {
      descricao: "Celular",
      valor: 1200.00,
      parcelas: [
        { descricao: "Seguro", valor: 100.00 },
        { descricao: "Película", valor: 30.00 }
      ]
    },
    {
      descricao: "Notebook",
      valor: 3000.00,
      parcelas: [
        {
          descricao: "Assistência técnica",
          valor: 200.00,
          parcelas: [
            { descricao: "Visita técnica", valor: 50.00 }
          ]
        }
      ]
    },
    {
      descricao: "Livro",
      valor: 89.90
    }
  ];

function totalDaFatura(fatura) {
    let total = 0;

    for (let i = 0; i < fatura.length; i++) {
        const item = fatura[i];

        total += item.valor; // Adiciona o valor da compra principal

        // Verifica se o item tem parcelas e se é um array
        if (item.parcelas) {

            total += totalDaFatura(item.parcelas); // Chamada recursiva para subparcelas
        }
    }
    return total;
}

const totalFatura = totalDaFatura(fatura);
console.log(`O valor total da fatura é: R$ ${totalFatura.toFixed(2)}`);