//Recursão - Fatorial
// O fatorial de um número n é o produto de todos os números inteiros positivos menores ou iguais a n.

function fatorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1); //chamada recursiva
}

console.log(fatorial(6))

//Recursão em sistemas de pastas

const pastas = [
    'Computador',
    [
      'Usuários',
      [
        'Gabriel',
        [
          'foto-rg.jpg',
          'Documentos',
          [
            'Projetos', 
              ['capa.jpg']
          ],
          'Imagens',
            [
              'papel-parede.jpg',
              'Viagem',
                [
                  'ferias1.jpg', 
                  'ferias2.jpg',
                  [
                    'Descartadas',
                      ['ferias3.jpg']    
                  ],
                ],
            ],
        ],
      ],
    ],
  ];
  
  function contarFotos(estrutura) {
    let contador = 0;
  
    for (let i = 0; i < estrutura.length; i++) {
      const item = estrutura[i];
  
      if (Array.isArray(item)) {
        // Se for uma subpasta (array), chama a função recursivamente
        contador += contarFotos(item);
      } else if (typeof item === 'string' && item.endsWith('.jpg')) {
        // Se for uma foto, soma no contador
        contador++;
      }
    }
  
    return contador;
  }
  
  const totalFotos = contarFotos(pastas);
  console.log(`Total de fotos encontradas: ${totalFotos}`);
  