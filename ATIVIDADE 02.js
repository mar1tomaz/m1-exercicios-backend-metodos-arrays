const doisGrupos = (nomes, tamanhoDoGrupo) => {

    let grupoAtual = 1;

    for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {
        const grupo = `Grupo: ${grupoAtual}: ${nomes.slice(i, (i + tamanhoDoGrupo)).join(`, `)}`;
        console.log(grupo);
    }

};

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];


doisGrupos(nomes, 4); 