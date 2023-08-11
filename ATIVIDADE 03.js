const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

const carros = (nomes, posicao) => {
    console.log(nomes.splice(posicao, 3).join(` - `));
};

carros(nomes, posicao);
