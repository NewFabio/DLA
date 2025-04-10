//Desafio02:
//Fila de Supermercado em Código

//Crie um código que simule uma fila de supermercado. Comece com uma fila simples de um único caixa e, porteriormente, expanda para simular a fila em diversos caixas. Considere operações como adicionar clientes à fila e atendê-los (remover clientes da fila).

//Lembre-se de que para sair da fila, os clientes são atendidos em ordem, e você pode usar operações de array para gerenciar isso.

let caixa1 = []

function filaMercado(fila) {
    let comprimento = 0
    for (let i = 5; i > fila.length; i--) {
        comprimento = fila.push(1)
        comprimento = fila.push(2)
        comprimento = fila.push(3)
        comprimento = fila.push(4)
        comprimento = fila.push(5)
    }
    return comprimento
}

function pagouProduto(fila){
    let pagou = 0
    for (let i = 5; i >= fila.length; i--) {
        pagou = fila.shift()
    }
    return pagou
}

let pagar = filaMercado(caixa1)
console.log(`A fila esta: ${caixa1} no caixa 1.`)

console.log(caixa1)

let pagou = pagouProduto(caixa1)
console.log(`A fila esta: ${caixa1} no caixa 1.`)

console.log(caixa1)