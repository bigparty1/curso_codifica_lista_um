/**
 * Faixas de idade:
 * - Criança: 0 a 12 anos
 * - Adolescente: 13 a 17 anos
 * - Adulto: 18 a 59 anos
 * - Idoso: 60 anos ou mais
 */

const readline = require('readline-sync');

console.log('### Classificação por idade ###');

const idade = readline.questionInt('Informe sua idade: ');

while(idade < 0) {
    console.log('Idade inválida! Informe uma idade válida.');
    idade = readline.questionInt('Informe sua idade: ');
}

if (idade <= 12 && idade >= 0) {
    console.log('Você é uma criança.');
    
}
else if(idade >= 13 && idade <= 17) {
    console.log('Você é um adolescente.');
}
else if(idade >= 18 && idade <= 59) {
    console.log('Você é um adulto.');
}
else if(idade >= 60) {
    console.log('Você é um idoso.');
} else {
    console.log('Idade inválida! Informe uma idade válida.');
}