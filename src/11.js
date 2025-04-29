const readline = require('readline-sync');

let somatorio = 0;

for (let i = 0; i < 5; i++) {
    somatorio += readline.questionFloat(`Digite o ${i + 1}º número: `);
}

console.log(`A soma dos números é: ${somatorio}`);
