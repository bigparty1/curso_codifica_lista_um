const readline = require('readline-sync');

const valor1 = readline.questionFloat('Qual o primeiro valor? ');
const valor2 = readline.questionFloat('Qual o segundo valor? ');

if(valor1 > valor2) {
    console.log(`${valor1} ${valor2}`);
} else {
    console.log(`${valor2} ${valor1}`);
}