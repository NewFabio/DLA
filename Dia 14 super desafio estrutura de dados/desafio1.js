//Desafio 01:
//Controlar filas de várias caixas de supermercado

//Vamos retomar o desafio de controle de filas de supermercado, mas agora com a diferença de que teremos várias filas ao mesmo tempo, uma para cada caixa.
//O objetivo é simular um supermercado com diversos caixas, cada um com sua fila de clientes.

//Um cliente pode ser adicionado a uma das filas (caixas)
//O cliente é atendido e removido da fila correspondente

// observações pessoais.
// um mercado tem mais de um caixa
//cada caixa tem uma fila
//é obrigatorio ter caixa com prioridade para gestante, idoso 60+ e pcd
//caixa ate 10 volumes

let fila = { 
    caixa1: [], 
    caixa2: [], 
    caixa3: []
}

function filaCaixa(cliente) {
    const {nome, idade, pcd, gestante, itens} = cliente
    if (idade > 60 || pcd || gestante) {
        fila.caixa1.push(nome)
        console.log(`Fila do caixa 01: ${fila.caixa1.join(", ")}`)
    } else {
        fila.caixa3.push(nome)
        console.log(`Fila do caixa 03: ${fila.caixa3.join(", ")}`)
    }

    if (itens >= 10) {
        fila.caixa2.push(nome)
        console.log(`Fila do caixa 02: ${fila.caixa2.join(", ")}`)
    }
}

function atendimento() {
    fila.caixa1.shift()
    fila.caixa2.shift()
    fila.caixa3.shift()
}

function statusFila() {
    if (fila.caixa1.length === 0) {
        console.log("Caixa 1 vazio!")
    }

    if (fila.caixa2.length === 0) {
        console.log("Caixa 2 vazio!")
    }

    if (fila.caixa3.length === 0) {
        console.log("Caixa 3 vazio!")
    }
}

filaCaixa({nome: "Fabio", idade: 33, pcd: false, gestante: false})
filaCaixa({nome: "Keli", idade: 40, pcd: false, gestante: false, itens: 5})
filaCaixa({nome: "Vitória", idade: 21, pcd: true, gestante: false})
filaCaixa({nome: "Junio", idade: 22, pcd: false, gestante: false})
filaCaixa({nome: "Bonifacio", itens: 9})
filaCaixa({nome: "Dona Ruth", idade: 70, pcd: false, gestante: false})
atendimento()
atendimento()
atendimento()
atendimento()



statusFila()