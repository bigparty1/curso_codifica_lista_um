const readline = require('readline-sync');

const valor = readline.questionFloat('Insira um valor? ');

for(let i = 0; i < 10; i++) {
    console.log(valor);
}