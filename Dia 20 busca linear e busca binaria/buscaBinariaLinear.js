// BUSCA BINARIA E BUSCA LINEAR

// Busca Linear
// Percorre todos os elementos de uma lista (ou array) um por um, do início ao fim, até encontrar o valor desejado ou até acabar a lista.

const nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela']

function buscaLinear(lista, valor) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor) {
            return i // Retorna o índice do elemento encontrado
        }
    }
    return -1 // Retorna -1 se o elemento não for encontrado
}

console.log(buscaLinear(nomes, 'Carlos'))

// Recursiva

function buscaLinearRecursiva(lista, valor, indice = 0) {
    if (indice >= lista.length) {
        return -1 // Retorna -1 se o elemento não for encontrado
    }
    if (lista[indice] === valor) {
        return indice // Retorna o índice do elemento encontrado
    }
    return buscaLinearRecursiva(lista, valor, indice + 1) // Chama a função recursivamente com o próximo índice
}

// Busca Binária
// só funciona em listar ordenadas. Ela divide a lista ao meio repetidamente para eliminar metade dos elementos a cada passo, procurando o valor desejado de forma muito mais eficiente.

function buscaBinaria(lista, valor) {
    let inicio = 0
    let fim = lista.length - 1

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2)
        
        if (lista[meio] === valor) {
            return meio // Retorna o índice do elemento encontrado
        } else if (lista[meio] < valor) {
            inicio = meio + 1 // Elimina a metade inferior da lista
        } else {
            fim = meio - 1 // Elimina a metade superior da lista
        }
    }
    return -1 // Retorna -1 se o elemento não for encontrado
}

const lista = [10, 20, 30, 40, 50, 60];
console.log(buscaBinaria(lista, 40))