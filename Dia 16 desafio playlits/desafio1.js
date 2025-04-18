//Desafio 01:

//Criar playlist
//Requisitos :
// 1 - Capacidade de adicionar e remover músicas
// 2 - Mostrar todas as músicas da playlist
// 3 - É possível mover a posição da música na playlist a qualquer momento
// 5 - Função para tocar toda a playlist do início ao fim
// 6 - Capacidade para tocar apenas a música da playlist
// 7 - As músicas devem ter os seguintes atributos: Nome da música, nome do artista, número de reporduções e tempo total da música
// 8 - Cada vez que uma música é tocada é preciso incrementar o número de reproduções.

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
    musicas: [], // Array para armazenar as músicas

    // Adiciona uma música no início da playlist (sem usar unshift)
    adicionarMusica: function(nome, artista, tempo) {
        const novaMusica = criarMusica(nome, artista, tempo);
        
        // Criamos um novo array e deslocamos os elementos manualmente
        for (let i = this.musicas.length; i > 0; i--) {
            this.musicas[i] = this.musicas[i - 1];
        }
        this.musicas[0] = novaMusica; // A nova música ocupa o índice 0
        console.log(`🎶 Música "${nome}" adicionada à playlist!`);
    },

    // Remove uma música da playlist (sem usar findIndex e splice)
    removerMusica: function(nome) {
        let index = -1;

        // Encontramos o índice da música manualmente
        for (let i = 0; i < this.musicas.length; i++) {
            if (this.musicas[i].nome === nome) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log(`⚠️ Música "${nome}" não encontrada.`);
            return;
        }

        // Deslocamos os elementos para preencher o espaço vazio
        for (let i = index; i < this.musicas.length - 1; i++) {
            this.musicas[i] = this.musicas[i + 1];
        }
        
        // Reduzimos o tamanho do array
        this.musicas.length--;
        console.log(`❌ Música "${nome}" removida da playlist.`);
    },

    // Move uma música para uma nova posição (sem usar splice)
    moverMusica: function(nome, novaPosicao) {
        let index = -1;

        // Encontramos a posição original da música
        for (let i = 0; i < this.musicas.length; i++) {
            if (this.musicas[i].nome === nome) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log(`⚠️ Música "${nome}" não encontrada.`);
            return;
        }

        // Pegamos a música a ser movida
        let musica = this.musicas[index];

        // Deslocamos os elementos para preencher o espaço vazio
        for (let i = index; i < this.musicas.length - 1; i++) {
            this.musicas[i] = this.musicas[i + 1];
        }
        this.musicas.length--;

        // Movemos os elementos para abrir espaço na nova posição
        for (let i = this.musicas.length; i > novaPosicao; i--) {
            this.musicas[i] = this.musicas[i - 1];
        }
        this.musicas[novaPosicao] = musica;
        
        console.log(`🔄 Música "${nome}" movida para a posição ${novaPosicao + 1}.`);
    },

    // Toca toda a playlist do início ao fim
    tocarPlaylist: function() {
        if (this.musicas.length === 0) {
            console.log("⚠️ A playlist está vazia.");
            return;
        }
        console.log("🎼 Tocando a playlist:");
        for (let i = 0; i < this.musicas.length; i++) {
            this.musicas[i].reproducoes++;
            console.log(`▶️ Tocando: ${this.musicas[i].nome} - ${this.musicas[i].artista} (${this.musicas[i].tempo})`);
        }
    },

    // Toca apenas uma música específica
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

    // Exibe a playlist atual
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

playlist.mostrarPlaylist();

playlist.tocarMusica("Shape of You");

playlist.tocarPlaylist();

playlist.moverMusica("Blinding Lights", 1);

playlist.removerMusica("Bohemian Rhapsody");

playlist.mostrarPlaylist();
