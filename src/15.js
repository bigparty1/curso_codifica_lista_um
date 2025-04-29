const readline = require('readline-sync');

console.log('### Fibonacci ###\n');

let anterior1 = 1, anterior2 = 1;

console.log(anterior1);
console.log(anterior2);

for(let i = 2; i < 10; i++) {
    let atual = anterior1 + anterior2;
    console.log(atual);
    anterior1 = anterior2;
    anterior2 = atual;
}
