const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

const encontrarDonoDoPet = (lista, nomePet) => {
    let usuarioEncontrado;
    for (usuario of lista) {
        if (usuario.pets.includes(nomePet) === true) {
            usuarioEncontrado = usuario
            break;
        }
    }
    if (usuarioEncontrado) {
        console.log(`O dono(a) do(a) ${nomePet} é o(a) ${usuarioEncontrado.nome}.`);
    } else {
        console.log(`Que pena ${nomePet}, não encontramos seu dono(a).`);
    }
};

encontrarDonoDoPet(usuarios, 'Max');
encontrarDonoDoPet(usuarios, 'Lulu');
encontrarDonoDoPet(usuarios, 'Charlie');