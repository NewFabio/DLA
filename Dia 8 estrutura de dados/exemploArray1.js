//Exemplo
const saldoContas = [1000, 10000, 500, 30, 78.10, 65, 9.99]

function calcularSaldoTotal (contas) {
    let total = 0
    for (let i = 0; i < contas.length; i++) {
        total += contas[i]
    }
    return total
}

const saldoTotal = calcularSaldoTotal(saldoContas)
console.log(saldoTotal)
