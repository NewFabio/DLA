//Desafio 01:
//Renovação CNH
//Calcule em quanto tempo a carteira de motorista irá vencer de acordo com a legislação.
//Requisitos
//1.Se está tirando a carteira pela primeira vez, o tempo de vencimento é de 1 ano.
//2.Se você tem idade inferior a 50 anos, o vencimento é de 10 anos.
//3.Se for igual ou superior a 50 anos ou inferior a 70 anos, o vencimento é de 5 anos.
//4.Se for igual ou superior a 70 anos, o vencimento será de 3 anos.

let primeiraCarteira = true;
let idade = 15;

if (primeiraCarteira && idade >= 18) {
  console.log('Sua carteira tem 1 ano de validade');
} else if (idade < 50) {
  console.log('Sua carteira tem 10 anos de validade');
} else if (idade >= 50 && idade < 70) {
  console.log('Sua carteira tem 5 anos de validade');
} else if (idade >= 70) {
  console.log('Sua carteira tem 3 anos de validade');
}
