//Desafio 03:
//Transforme o Código em uma Condição Ternária

//condicao normal veirificada com if
let nota1 = 85
let status1

if (nota1 >= 70) {
    status1 = "aprovado"
} else {
    status1 = "reprovado"
}
console.log(status1)

//convertendo para condicáo ternaria

let nota = 80
let status = nota >= 70 ? "aprovado" : "reprovado";

console.log("Status: " + status);