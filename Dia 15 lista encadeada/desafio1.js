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
    };
}

// Criando a estrutura básica da lista encadeada
let listaEncadeada = {
    head: null,

    // Insere um nó no início da lista
    insertFirst: function (elemento) {
        const novoNo = criarNo(elemento);
        if (!this.head) {
            this.head = novoNo;
        } else {
            novoNo.next = this.head;
            this.head = novoNo;
        }
        return elemento;
    },

    // Insere um nó no final da lista
    insertLast: function (elemento) {
        const novoNo = criarNo(elemento);

        if (!this.head) {
            this.head = novoNo;
        } else {
            let atual = this.head;
            while (atual.next) {
                atual = atual.next;
            }
            atual.next = novoNo;
        }
        return elemento;
    },

    // Insere um nó em uma determinada posição
    insertAt: function (elemento, posicao) {
        const novoNo = criarNo(elemento);

        if (posicao === 0) {
            novoNo.next = this.head;
            this.head = novoNo;
            return elemento;
        }

        let atual = this.head;
        let anterior = null;
        let contador = 0;

        while (contador < posicao && atual) {
            anterior = atual;
            atual = atual.next;
            contador++;
        }

        if (contador === posicao) {
            anterior.next = novoNo;
            novoNo.next = atual;
            return elemento;
        } else {
            console.log("Posição inválida.");
            return null;
        }
    },

    // Exclui um nó em uma determinada posição
    deleteAt: function (posicao) {
        if (!this.head) {
            console.log("A lista está vazia.");
            return null;
        }

        if (posicao === 0) {
            const elementoRemovido = this.head.data;
            this.head = this.head.next;
            return elementoRemovido;
        }

        let atual = this.head;
        let anterior = null;
        let contador = 0;

        while (contador < posicao && atual) {
            anterior = atual;
            atual = atual.next;
            contador++;
        }

        if (atual) {
            anterior.next = atual.next;
            return atual.data;
        } else {
            console.log("Posição inválida.");
            return null;
        }
    },

    // Encontra um nó de acordo com a posição
    searchAt: function (posicao) {
        let atual = this.head;
        let contador = 0;

        while (contador < posicao && atual) {
            atual = atual.next;
            contador++;
        }

        if (atual) {
            return atual.data;
        } else {
            console.log("Posição inválida.");
            return null;
        }
    },

    // Percorre todos os nós
    traversal: function () {
        let atual = this.head;
        let resultado = [];

        while (atual) {
            resultado.push(atual.data);
            atual = atual.next;
        }

        return resultado;
    },

    // Retorna a posição de acordo com o elemento do nó
    indexOf: function (elemento) {
        let atual = this.head;
        let contador = 0;

        while (atual) {
            if (atual.data === elemento) {
                return contador;
            }
            atual = atual.next;
            contador++;
        }

        console.log("Elemento não encontrado.");
        return -1;
    }
};

// Testando a lista encadeada
console.log(listaEncadeada.insertFirst('Locomotiva')); // Insere no início
console.log(listaEncadeada.insertLast('Vagão 1')); // Insere no final
console.log(listaEncadeada.insertLast('Vagão 2')); // Insere no final
console.log(listaEncadeada.insertAt('Vagão Intermediário', 1)); // Insere na posição 1
console.log(listaEncadeada.traversal()); // Percorre e exibe todos os nós
console.log(listaEncadeada.searchAt(2)); // Encontra o elemento na posição 2
console.log(listaEncadeada.indexOf('Vagão 2')); // Encontra a posição do elemento "Vagão 2"
console.log(listaEncadeada.deleteAt(1)); // Remove o nó na posição 1
console.log(listaEncadeada.traversal()); // Percorre e exibe todos os nós após a exclusão
