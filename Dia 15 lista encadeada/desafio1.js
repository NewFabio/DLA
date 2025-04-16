//Alguns tipos de Listas

//Lista encadeada simples - Lista duplamente encadeadas - Listas circulares - Listas Ordenadas

//Operações de listas encadeadas

// Insertion - adiciona um elemento na lista
// Deletion - exclui um elemento na lista
// Traversal - percorre cada um dos alementos na lista
// Search - realiza a busca por um elemento específico

// Estrutura de Objeto Literal (Literal Object) - se assemelha ao JSON

//Desafio 01:
//Lista encadeada de um trem

//Termina de implementar as outras funções que estão faltando para trabalhar com lista encadeada como:

//insertLast - que inclui um nó no final da lista
//insertAt - que inclui um nó em uma determinada posição
//deleteAt - que exclui um nó em uma determinada posição
//serachAt - que encontra um nó de acordo com a posição
//traversal - que percorre todos os nós
//indexOf - que retorna a posição de acordo com o elemento do nó

// Criando o nó da lista encadeada
function criarNo(elemento) {
    return {
        data: elemento,
        next: null
    }
}

// Criando a estrutura básica da lista encadeada
let listaEncadeada = {
    head: null,

    insertFirst: function(elemento) {
        const novoNo = criarNo(elemento)
        // THIS ACESSA todos os atributos e metodos
        if (!this.head) {
            this.head = novoNo
        } else {
            novoNo.next = this.head
            this.head = novoNo
        }
        return elemento
    }

}

function proximoVagao(elemento) {
    return {
        data: elemento,
        next: insertLast()
    }
}

console.log(listaEncadeada.insertFirst('Locomotiva')+proximoVagao('vagao1'))

