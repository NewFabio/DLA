//Desafio 05:
//Cancela de Estacionamento
//Crie um código usando switch que imprima uma mensagem adequada para o motorista. O sistema tem três possíveis estados: "Aberta", "Fechada", "Manutenção".
let codigo = 2
let cancela = "";

switch (codigo) {
    case 1:
        cancela = "Aberta";
        break;
    case 2:
        cancela = "Fechada";
        break;
    case 3:
        cancela = "Manutenção";
        break;
    default:
        cancela = "Inválido";
}
console.log(cancela)