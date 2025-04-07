//Desafio 02:
//Dia da Semana por extenso

//Transforme o código que criamos no dia 4 sobre dias de semana em uma função chamada "obterDiaDaSemana". Receba um número que representa o dia da semana que vai de 1 a 7 e retorne esse dia por extenso.

function DiaDASemana(dia){
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return diasDaSemana[dia - 1];
}

console.log(DiaDASemana(1)); 