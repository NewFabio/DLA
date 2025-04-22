//SUPER DESAFIO
//Simulador de transações Pix

//Crie um código para simular transações Pix em uma conta bancária, utilizando as seguintes regras:
// 1 - O limite diário para transferências (R$ 10.000), um histórico de transações por Pix e também um total já transferido por chave Pix.
// 2 - Deverá implementar 2 operações Pix, uma para enviar o Pix e outra para cancelar (reembolso).
// 3 - A conta terá um limite máximo diário de R$ 10.000,00.
// 4- Existirá um total armazenado de todos os Pix realizados para uma mesma chave totalPorChave.

const conta = {
  saldo: 50000,
  limiteDiario: 10000,
  totalTransferidoHoje: 0,
  historicoTransacoes: [],
  totalPorChave: {}, // Armazena total transferido por chave Pix
};

function enviarPix(chavePix, valor) {
  // Verifica se o valor é válido
  if (valor <= 0) {
    console.log("Valor inválido para transferência.");
    return;
  }

  // Verifica se o saldo é suficiente
  if (conta.saldo < valor) {
    console.log("Saldo insuficiente.");
    return;
  }

  // Verifica se o limite diário foi atingido
  if (conta.totalTransferidoHoje + valor > conta.limiteDiario) {
    console.log("Limite diário de transferências atingido.");
    conta.historicoTransacoes.push({
        chavePix: chavePix,
        valor: valor,
        tipo: "falha",
        data: new Date(),
      });
    return;
  }

  // Realiza a transferência
  conta.saldo -= valor;
  conta.totalTransferidoHoje += valor;

  // Atualiza o total transferido por chave Pix
  if (!conta.totalPorChave[chavePix]) {
    conta.totalPorChave[chavePix] = 0;
  }
  conta.totalPorChave[chavePix] += valor;

  // Adiciona a transação ao histórico
  conta.historicoTransacoes.push({
    chavePix: chavePix,
    valor: valor,
    tipo: "enviado",
    data: new Date(),
  });

  console.log(`Transferência de R$ ${valor} para ${chavePix} realizada com sucesso!`);
}

enviarPix("chave1", 5000);
enviarPix("chave2", 5000);
enviarPix("chave3", 5000);

console.table(conta.historicoTransacoes)
console.table(conta.totalPorChave)