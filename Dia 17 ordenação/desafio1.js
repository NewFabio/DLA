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

function selectionSort(arr) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < n; j++) {
            if (arr[j][1] < arr[minIndex][1]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

const a = selectionSort(produtos)
console.log(a)