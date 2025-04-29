/**
 * Conceitos:
 * 0 ~ 6(não incluso): Reprovado
 * 6 ~ 7(não incluso): Recuperação
 * 7 ~ 10(não incluso): Aprovado
 */

const readline = require('readline-sync');

console.log('### Conceito Final ###');

const nota = readline.questionFloat('Informe seu conceito final: ');

while (nota < 0 || nota > 10) {
    console.log('Nota inválida! Informe uma nota válida.');
    nota = readline.questionFloat('Informe seu conceito final: ');
}

if (nota >= 0 && nota < 6) {
    console.log('Reprovado!');
} else if (nota >= 6 && nota < 7) {
    console.log('Recuperação!');
} else if (nota >= 7 && nota <= 10) {
    console.log('Aprovado!');
} else {
    console.log('Nota inválida! Informe uma nota válida.');
}
