//Desafio 02:
//Perfomance de Aluno
//Informe para um aluno a sua perfomance em uma prova a partir da sua nota.
//1.Se a nota for menor que 5, então mosrte que foi "Insuficiente".
//2.Se for menor que 6, então mostre "Regular".
//3.Se foi menor que 7.5, mostre "Bom".
//4.Se foi menor que 9, "Muito bom".
//5.Se for maior ou igual a 9, mostre "Excelente".

let nota = 9.2

if (nota < 5) {
    console.log('Insuficiente')
} else if (nota <= 6) {
    console.log('Regular')
} else if (nota < 7.5) {
    console.log('Bom')
} else if (nota < 9) {
    console.log('Muito Bom')
} else if (nota >= 9) {
    console.log('Excelente')
} else {
    console.log('Nota inválida')
}