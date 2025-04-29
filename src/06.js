// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const readline = require('readline-sync');

const ladoA = readline.questionFloat('Qual o valor do lado A? ');
const ladoB = readline.questionFloat('Qual o valor do lado B? ');
const ladoC = readline.questionFloat('Qual o valor do lado C? ');

const ehTriangulo = (ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB);

if (ehTriangulo) {
    console.log('Os lados fornecidos formam um triângulo!');
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Triângulo equilátero!');
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Triângulo isósceles!');
    } else {
        console.log('Triângulo escaleno!');
    }
} else {
    console.log('Os lados fornecidos não formam um triângulo!');
}