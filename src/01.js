const readline = require('readline-sync');

console.log('### Verificador de números par e impar ###');

const numero = readline.questionInt('Informe um número: ');

if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
}
else {
    console.log(`O número ${numero} é ímpar.`);
}