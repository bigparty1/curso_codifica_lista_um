/** Para o calculo do IMC é necessário altura e peso
 * Conceitos:
 * * Abaixo de 18.5: Abaixo do peso
 * * 18.5 ~ 24.9: Peso normal
 * * 25 ~ 29.9: Sobrepeso
 * * 30 ~ 34.9: Obesidade grau 1
 * * 35 ~ 39.9: Obesidade grau 2
 * * 40 ou mais: Obesidade grau 3
 * Formula: IMC = peso / (altura * altura)
 */

const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso em kilos? ');
const altura = readline.questionFloat('Qual a sua altura em metros? ');

const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 29.9) {
    console.log('Sobrepeso');
} else if (imc >= 30 && imc < 34.9) {
    console.log('Obesidade grau 1');
} else if (imc >= 35 && imc < 39.9) {
    console.log('Obesidade grau 2');
} else {
    console.log('Obesidade grau 3');
}