const readline = require('readline-sync');

console.log('### Média aritimética ###\nObs: Digite 0 para encerrar\n');

let somatorio = 0;
let contador = 0;
let input = -1;

while (input !== 0) {
    input = readline.questionFloat(`Digite o ${contador + 1}º número: `);
    if (input !== 0) {
        somatorio += input;
        contador++;
    }
}

console.log(`A média aritmética é: ${somatorio / contador}`);
