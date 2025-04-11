//Desafio 01:
//Controle de Navegação em Navegadores Web.

//1.Pilha de Voltar: Quando você navega de uma página para outra, a página atual é empurrada (pushed) para a pilha de voltar. Se você continuar navegando por várias páginas, elas serão empilhadas em ordem. Quando você clica no botão "voltar", o topo da pilha de voltar é retirado (popped) e a página é exibida.

//2.Pilha de Avançar: Quando você clica em "voltar", a página da qual você voltou é empurrada para a pilha de avançar. Se você clicar em "avançar", você tira (pop) da pilha de avançar e navega para essa página.

// Crie 3 funções, uma que controle o voltar, uma para o avançar e outra para navegar para um endereço.
// Controle a partir de 2 pilhas e uma variável que armazena o endereço da página atual.

let voltar = []
let avancar = []

function paginaAtual(pagina) {
    let endereco = pagina.push("Página atual.")
    if (pagina.length >= 1) {
        let pagina2 = []
        pagina2 = pagina.push("Segunda página.")
    }
    return endereco
}

function voltarPag(pagina, pagina2){
    let voltar = pagina.pop()
    let avancar = pagina2.push("Voltei pra primeira página.")
    return voltar + avancar
}

function avancarPagina(pagina, pagina2) {
    let retorno = pagina.pop()
    let avancar = pagina2.push("Voltei pra segunda página.")
    return retorno + avancar
}


paginaAtual(voltar)
console.log(voltar)
voltarPag(voltar, avancar)
console.log(voltar)
console.log(avancar)
avancarPagina(avancar, voltar)
console.log(avancar)
console.log(voltar)