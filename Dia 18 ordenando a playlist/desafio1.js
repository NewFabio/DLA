//Desafio 01:
//Ordenando a Playlist

//Na playlist de músicas do dia 16, acrescente o que ja foi feito. Utilize os algoritimos para ordenar a playlist pelo título da música e também pelo número de reproduções.
//OBS
//Ordene por titulo utilizando o Bubble Sort e por número de reproduções com o Selection Sort.

// Função para criar uma nova música em formato JSON
function criarMusica(nome, artista, tempo) {
    return {
        nome: nome,
        artista: artista,
        reproducoes: 0,
        tempo: tempo
    };
}

// Estrutura da Playlist como um Objeto Literal
const playlist = {
    musicas: [],

    // Adiciona uma música ao início da playlist
    adicionarMusica: function(nome, artista, tempo) {
        const novaMusica = criarMusica(nome, artista, tempo);
        
        // Criamos um novo array e deslocamos os elementos manualmente
        for (let i = this.musicas.length; i > 0; i--) {
            this.musicas[i] = this.musicas[i - 1];
        }
        this.musicas[0] = novaMusica;
        console.log(`🎶 Música "${nome}" adicionada à playlist!`);
    },

    // Ordenação por Nome usando `.sort()`
    ordenarPorNomeSort: function() {
      this.musicas.sort((a, b) => {
        let nomeA = a.nome.toLowerCase();
        let nomeB = b.nome.toLowerCase();

        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
        return 0;
      });

        console.log("🔤 Playlist ordenada por Nome (usando sort).");
    },

    // Ordenação por Número de Reproduções usando `.sort()`
    ordenarPorReproducoesSort: function() {
        this.musicas.sort((a, b) => b.reproducoes - a.reproducoes);
        console.log("🔢 Playlist ordenada por Número de Reproduções (usando sort).");
    },

    // Simula tocar uma música e aumentar a contagem de reproduções
    tocarMusica: function(nome) {
        for (let i = 0; i < this.musicas.length; i++) {
            if (this.musicas[i].nome === nome) {
                this.musicas[i].reproducoes++;
                console.log(`🎵 Tocando: ${this.musicas[i].nome} - ${this.musicas[i].artista} (${this.musicas[i].tempo})`);
                return;
            }
        }
        console.log(`⚠️ Música "${nome}" não encontrada.`);
    },

    // Exibe a playlist
    mostrarPlaylist: function() {
        if (this.musicas.length === 0) {
            console.log("📭 A playlist está vazia.");
        } else {
            console.log("🎶 Playlist Atual:");
            for (let i = 0; i < this.musicas.length; i++) {
                console.log(`${i + 1}. ${this.musicas[i].nome} - ${this.musicas[i].artista} | Reproduções: ${this.musicas[i].reproducoes}`);
            }
        }
    }
};

// 🎧 Testando a playlist
playlist.adicionarMusica("Bohemian Rhapsody", "Queen", "5:55");
playlist.adicionarMusica("Shape of You", "Ed Sheeran", "3:53");
playlist.adicionarMusica("Blinding Lights", "The Weeknd", "3:22");
playlist.adicionarMusica("Hotel California", "Eagles", "6:30");
playlist.adicionarMusica("Imagine", "John Lennon", "3:07");

// Mostrar playlist antes da ordenação
playlist.mostrarPlaylist();

// Tocar algumas músicas para modificar a contagem de reproduções
playlist.tocarMusica("Shape of You");
playlist.tocarMusica("Shape of You");
playlist.tocarMusica("Imagine");
playlist.tocarMusica("Bohemian Rhapsody");
playlist.tocarMusica("Bohemian Rhapsody");
playlist.tocarMusica("Bohemian Rhapsody");

// Mostrar playlist com as contagens atualizadas
playlist.mostrarPlaylist();

// Ordenar por Nome e mostrar (usando sort)
playlist.ordenarPorNomeSort();
playlist.mostrarPlaylist();

// Ordenar por Reproduções e mostrar (usando sort)
playlist.ordenarPorReproducoesSort();
playlist.mostrarPlaylist();