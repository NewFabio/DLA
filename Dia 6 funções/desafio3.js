//Desafio 03:

//Volte ao dia 5, no desafio 1, e cire uma função que fará todo o cálculo que detalhamos no desafio.
//Você tem um valor inicial de uma aplicação financeira que rende um percentual ao ano. Calcule como esse investimento cresce no decorrer do ano.

function Investimento(valorInvestido, taxaDeJuros, anos){
    let rendimento = valorInvestido * taxaDeJuros * anos
    
    return rendimento.toFixed(2)
}

console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 1)}`)
console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 2)}`)
console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 3)}`)
console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 4)}`)
console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 5)}`)
console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 6)}`)
console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 7)}`)
console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 8)}`)
console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 9)}`)
console.log(`O seu investimento renderá R$:${Investimento(1000, 0.12, 10)}`)
