//Operações realizadas em uma fila

//Enqueue - adiciona um item na fila

//Dequeue - retira o primeiro item da fila

//Front - retorna o primeiro item da fila - refere à posição ou ao elemento na frente da fila.

//Peek - retorna o primeiro item da fila - ação/operador que retorna o valor na frente (ou topo) sem remover.

//isEmpty - verifica se a fila esta vazia

//isFull - verifica se a fila esta cheia caso ela tenha um número de posições limitadas

//Rear - retorna o último elemento da fila

//Shift - remove o inicio da fila

//Desafio 01:
//Fila de atendimento em um Drive Through

//Criar uma fila de atendimento de clientes em uma cafeteria Drive Through. Todo atendimento é realizado a partir de carros que vão entrando no estacionamento da cafeteria e recebendo os pedidos a partir de um totem eletrônico.

let filaPedido = []

function receberPedido(nomeCliente) {
    filaPedido.push(nomeCliente)
    console.log(`Pedido na fila: ${filaPedido.join(" , ")}.`)
}

function entregarPedido(){
    let pedidoEntregue = filaPedido.shift()
    console.log(`Pedido de ${pedidoEntregue} está pronto!`)
}

function statusDaFila(){
    if (filaPedido.length === 0) {
        console.log("Sem pedidos na fila")
    } else {
        console.log(`Próximos da fila: ${filaPedido.join(", ")}`)
    }
}

receberPedido("Fabio")
receberPedido("Keli")
receberPedido("Vitoria")

entregarPedido()
statusDaFila()

entregarPedido()
statusDaFila()

entregarPedido()
statusDaFila()
