//Desafio 01:
//Braço mecânico para empilhar produtos

//Na linha de produção, um braço mecânico automatizado é encarregado de pegar produtos individuais que chegam através de uma esteira e empilha-los em caixas para envio.
//Cada caixa pode conter até no máximo 10 produtos.
//Uma vez que a caixa está cheia, ela é enviada para ser selada e despachada.
//Empilhar = push(inserir)  pop(retira item da pilha)
//Verificar capacidade = top(retorna o valor do item que esta no topo)
//Criar uma nova pilha =

let caixa1 = [];
let caixa2 = [];

function adicionarProduto(produto) {
  for (let i = 0; i < produto.length; i++){
    const produtos = produto[i]

    if (caixa1.length < 10) {
        caixa1.push(produtos)
    } else if (caixa2.length < 10) {
        caixa2.push(produtos)
    } else {
        caixa1.top(produtos)
        console.log("Todas as caixa estão cheias!")
        break;
    }
  }
}



let esteira = Array.from({length: 20}, (_, i) => `Produto ${i + 1}`)
//Cria um novo array com base em: Um objeto com tamanho definido ({ length: 20 }) E uma função que define o conteúdo de cada item.

// { length: 20 } Isso cria um array "vazio" com 20 posições. Mas atenção: é um truque — você não está criando um array com 20 valores reais, e sim 20 posições a serem preenchidas com a função logo em seguida.

//(_, i) => \Produto ${i + 1}`` Essa é a função de mapeamento que será chamada uma vez para cada item do array. i é o índice (vai de 0 a 19). _ é o valor atual do item, mas como os itens são "vazios", a gente ignora com _. Retorna a string formatada: "Produto 1", "Produto 2", ..., até "Produto 20".







adicionarProduto(esteira)


console.log(caixa1)
console.log(caixa2);
