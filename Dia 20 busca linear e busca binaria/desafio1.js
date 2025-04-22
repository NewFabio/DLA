//Desafio 01:
//Busca Binária com Recursividade

//Implemente a busca binária de um array de números, porém utilizando recursividade, assim como mostramos na busca linear.
//Teste também com um array com nomes para ver como funcionará.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Vanessa']

function buscaBinaria(lista, valor, inicio = 0, fim = lista.length - 1) {
    if (inicio > fim) {
        return -1; // Retorna -1 se o elemento não for encontrado
    }

    const meio = Math.floor((inicio + fim) / 2);

    if (lista[meio] === valor) {
        return meio; // Retorna o índice do elemento encontrado
    } else if (lista[meio] < valor) {
        return buscaBinaria(lista, valor, meio + 1, fim); // Chama a função recursivamente na metade superior
    } else {
        return buscaBinaria(lista, valor, inicio, meio - 1); // Chama a função recursivamente na metade inferior
    }

    return -1; // Retorna -1 se o elemento não for encontrado
}

console.log(buscaBinaria(numeros, 5))

console.log(buscaBinaria(nomes, 'Ana'))