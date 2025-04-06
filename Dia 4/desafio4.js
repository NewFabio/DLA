//Desafio 04:
//Condiçao ternária com expressão mais complexa
//Escreva um código que determina se o cliente pode fazer comprar com sua conta. As condições para poder comprar são:
//1.A conta precisa estar ativa
//2.O saldo deve estar maior que R$500
//3.Use a condição ternária para fazer isso.


let saldo = 550
let conta = false
let status = saldo >= 500 && conta === true ? "pode comprar" : "nao pode comprar";

console.log(status);