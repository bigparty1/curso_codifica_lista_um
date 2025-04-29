const readline = require('readline-sync');

console.log('### Calculo do Fatorial ###\n');

const input = readline.questionInt('Digite um número: ');
let fatorial = 1;

for(let i = input; i > 1; i--) {
    fatorial *= i;
}

console.log(`${input}! = ${fatorial}`);

