// Um Deque (abreviação de "Double-Ended Queue") é uma estrutura de dados que permite a inserção e remoção de elementos tanto no início quanto no final da fila, ou seja, em ambas as extremidades.

// Operações com Deque
//addFirst / insertFront / unshift - adiciona um elemento no inicio do deque
//addLast / insertLast / push - adciona um elemento no final do deque
//removeFirst / deleteFront / shift - remove um elemento do inicio do deque
//removeLast / deleteLast / pop - remove um elemento do final do deque
//peekFirst / front - retorna o primeiro elemento do deque sem removê-lo
//peekLast / rear - retorna o último elemento do deque sem removê-lo
//isEmpty - retorna True ou False se o array estiver vazio
//getItens / slice - retorna todo o array ou uma cópia do array

//Desafio 01:
//Controle de Tarefas Dinâmicas com Prioridades

//Crie um controle que gerencie tarefas com prioridade. O objetivo é simular um ambiente onde tarefas urgentes podem surgir a qualquer momento, exigindo reorganização rápida e eficiente da fila de tarefas.

//Objetivos

//Implementar um Deque para Tarefas
//Manipulação de Prioridades
//Testar com Cenários Realistas

let fila = []

function entrarNaFila(paciente) {
    fila.push(paciente)
    console.log(`${paciente} na cor VERDE entrou na fila.`)
}

function statusFila() {

    if (fila.length === 0) {
        console.log("A fila esta vazia!")
    } else {
        console.log(`Fila: ${fila.join(" , ")}.`)
        console.table(fila)
    }
}

function vermelho(paciente) {
    fila.unshift(paciente)
    console.log(`O paciente ${paciente}, é cor VERMELHA.`)
}

function amarelo(paciente) {
    fila.splice(1, 0, paciente)
    console.log(`O paciente ${paciente}, está com cor AMARELA.`)
}

function atendimento() {
    fila.shift()
}

entrarNaFila("Fabio")
entrarNaFila("Keli")
entrarNaFila("Junio")
entrarNaFila("Vitória")
entrarNaFila("Bonifácio")

statusFila()

vermelho("Maria do bairro")

statusFila()

amarelo("Francisco")

statusFila()

atendimento()

statusFila()

atendimento()
atendimento()
atendimento()
atendimento()

statusFila()

atendimento()
atendimento()

statusFila()

vermelho("Rato")

statusFila()