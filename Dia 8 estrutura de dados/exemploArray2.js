//Exemplo

const saldoContas = [
    ["Banco 1", "Agencia 1", "Conta 1", 1000],
    ["Banco 1", "Agencia 1", "Conta 2", 10000],
    ["Banco 2", "Agencia 1", "Conta 3", 500],
    ["Banco 2", "Agencia 2", "Conta 4", 30],
    ["Banco 3", "Agencia 1", "Conta 5", 78.10],
    ["Banco 4", "Agencia 1", "Conta 6", 65],
    ["Banco 4", "Agencia 1", "Conta 7", 9.99]
]

function calcularSaldoPorBanco(contas, nomeBanco) {
    let saldoTotal = 0
    for (let i = 0; i < contas.length; i++) {
        const banco = contas[i][0]
        const saldoConta = contas[i][3]

        if(banco === nomeBanco) {
            saldoTotal += saldoConta
        }
    }
    return saldoTotal 
    
}

const saldoBanco1 = calcularSaldoPorBanco(saldoContas, "Banco 3")
console.log(`Saldo total do Banco 1: R$ ${saldoBanco1.toFixed(2)}, `)

const saldoBanco2 = calcularSaldoPorBanco(saldoContas, "Banco 2")
console.log(`Saldo total do Banco 2: R$ ${saldoBanco2.toFixed(2)}`)