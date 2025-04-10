//Desafio 02:
//Um novo Slice

//Recrie o slice, fazendo da sua maneira.

const frutas = ["banana", "uva", "maca", "pera", "mamao", "limao", "abacaxi", "coco", "caju", "morango"]

function tipoSlice(array, inicio = 0, fim = array.length) {
    const resposta = []

    if (inicio < 0) {
        inicio = array.length + inicio
    }

    if (fim < 0) {
        fim = array.length + fim
    }

    for (let i = inicio; i < fim; i++) {
        resposta.push(array[i]);
    }

    return resposta
}

const lupa = tipoSlice(frutas, 3, 9)
console.log(lupa)