/**
 * Opções do menu serão os 3 exercícios anteriores com uma opção de sair encerar o programa.
 */

const readline = require('readline-sync');
const exercicio1 = () => {
    console.log('### Verificador de números par e impar ###');

    const numero = readline.questionInt('Informe um número: ');

    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }
}
const exercicio2 = () => {
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
}
const exercicio3 = () => {
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
}

let continuar = true;

while (continuar) {
    console.log('### Menu ###');
    console.log('1. Verificador de números par e impar');
    console.log('2. Classificação por idade');
    console.log('3. Conceito Final');
    console.log('4. Sair');

    const opcao = readline.questionInt('Escolha uma opção: ');

    switch (opcao) {
        case 1:
            exercicio1();
            break;
        case 2:
            exercicio2();
            break;
        case 3:
            exercicio3();
            break;
        case 4:
            console.log('Saindo...');
            continuar = false;
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
    }

    readline.question('Pressione ENTER para continuar...\n');
}