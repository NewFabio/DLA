//Algoritimos mais usados na ordenação
//Bubble Sort - (ordenação por bolha) percorre o array várias vezes sempre do início até o penultimo comparando e trocando os elementos vizinhos de posição ate que todos estejam ordenados.
//Selection Sort - percorrer o array repetidamente e sempre selecionar o menor valor para coloca-lo na posição correta 
//Insertion Sort - 
//Merge Sort - 
//Quick Sort - 

//Desafio 01:
//Ordenando Produtos por Preço

const produtos = [
    ["Arroz", 25.99],
    ["Feijão", 12.50],
    ["Leite", 6.49],
    ["Óleo", 8.99],
    ["Pão", 7.00],
    ["Café", 15.30],
    ["Açucar", 4.89],
    ["Sal", 3.25],
    ["Macarrão", 5.79],
    ["Manteiga", 9.99]
];

function ordenarPorNome(arr) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < n; j++) {
            if (arr[j][0] < arr[minIndex][0]) { //comparando pelo nome do produto
                minIndex = j
            }
        }
        //troca os elementos manualmente
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

function ordenarPorPreco(arr) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < n; j++) {
            if (arr[j][1] < arr[minIndex][1]) { //comparando pelo preço do produto
                minIndex = j
            }
        }
        //troca os elementos manualmente
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

console.log("🛒 Lista Original")
console.table(produtos)

console.log("Lista ordenada por nome: ")
console.table(ordenarPorNome(produtos.slice()))

console.log("Lista ordenada por preço: ")
console.table(ordenarPorPreco(produtos.slice()))