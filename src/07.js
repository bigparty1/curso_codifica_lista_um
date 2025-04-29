// Valor unidade maça: 0.30
// Valor acima de 12: 0.25

const readline = require('readline-sync');

const quantidade = readline.questionInt('Quantas maças você comprou? ');

let valorUnidade = 0.30;

if (quantidade >= 12) {
    valorUnidade = 0.25;
}

console.log(`O valor total da compra é: R$ ${(quantidade * valorUnidade).toFixed(2)}\nValor por unidade: R$ ${valorUnidade.toFixed(2)}`);
if(quantidade >= 12) {
    console.log(`Você economizou ${((0.30 - 0.25) * quantidade).toFixed(2)} reais!`);
}