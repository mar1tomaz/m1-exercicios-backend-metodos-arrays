const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const saladaMista = (frutas) => {
    frutas = frutas.reverse();
    console.log(frutas);
}
saladaMista(frutas);
const addmelao = (frutas) => {
    frutas.shift();
    frutas.pop();
    frutas.push(`Melão`);
    console.log(frutas);
}
addmelao(frutas); 
