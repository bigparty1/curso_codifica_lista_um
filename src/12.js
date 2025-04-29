const readline = require('readline-sync');

console.log('### Tabuada ###\n');
let numero1 = readline.questionFloat('Digite um número: ');
console.log(`Tabuada do ${numero1}`);
for(let i = 1; i <= 10; i++) {
    console.log(`${numero1} x ${i} = ${numero1 * i}`);
}
