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
