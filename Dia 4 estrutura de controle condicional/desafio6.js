//Desafio 06:
//Sistema PDV (Ponto de Venda)
//Crie um código usando switch que calcule e imprima o valor final do produto após a aplicação do desconto, com base no tipo do produto. O desconto é dado com base no tipo do produto:
//1."Alimentos" têm desconto de 5%.
//2."Eletrônicos" tem desconto de 10%.
//3."Roupas" tem desconto de 20%.
//4."Livros" tem desconto de 50%.
//5.Se o tipo do produto não estiver na lista, não há desconto.

let produto = "livros"
let desconto = 0
let valor = 100

switch (produto) {
    case 'alimentos':
        desconto = valor - (100 * 0.05);;
        break;
    case 'eletronicos':
        desconto = valor - (100 * 0.10);
        break;
    case 'roupas':
        desconto = valor - (100 * 0.20);
        break;
    case 'livros':
        desconto = valor - (100 * 0.50);
        break;
    default:
        desconto = "Nenhum desconto";
}
console.log('O valor final do produto é R$' + desconto)