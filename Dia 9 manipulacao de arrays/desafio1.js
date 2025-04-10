//Desafio 01:
//Recrie funções úteis em Arrays

//Reescreva as funções: indexOf, includes e o lastIndexOf

// indexOf = retorna um numero inteiro que é a posição do primeiro elemento encontrado no array, caso o elemento nao seja encontrado, deve retornar -1
// includes = verifica se um elemento existe dentro do array, deve retornar um booleano, true ou false
// lasIndexOf = verifica o indice da ultima ocorrencia no array, se nao encontrar retorna -1

const frutas = ["banana", "goiaba", "uva"]

function indexOf(indice){
    let fruta = ""
    if (indice === "banana" || indice === "goiaba" || indice === "uva") {
        fruta = indice
        
        console.log(1)
    } else {
        console.log(-1)
    }
    return fruta
}

const verificar = indexOf("banana")
console.log(verificar)

function includes(indice) {
    let fruta = ""
    if (indice === "banana" || indice === "goiaba" || indice === "uva") {
        fruta = indice
        
        console.log("True")
    } else {
        console.log("False")
    }
    return fruta
}

const buscar = includes("banana")

function lastIndexOf(indice) {
    let fruta = ""
    if (indice === "uva") {
        fruta = indice
        
        console.log(1)
    } else {
        console.log(-1)
    }
    return fruta
}

const procurar = lastIndexOf("uva")