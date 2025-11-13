// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

import promptSync from 'prompt-sync';

const prompt = promptSync();

function studentGrades() {

    const studentCode = parseInt(prompt('Insira o código do aluno (negativo para sair): '));
    if (studentCode < 0) {
        console.log('Encerrando...');
        return;
    }

    const notas = [];
    let i = 0;
    while (i < 3) {
        const nota = parseFloat(prompt('Insira a nota ' + (i + 1) + ': '));
        if (nota < 0 || nota > 10) {
            console.log('Nota inválida');
        } else {
            notas.push(nota);
            i++;
        }
    }

    console.log('Notas inseridas: ', notas);

    console.log('----');

    const maiorNota = Math.max(...notas);

    let somaPesos = 0;
    let somaNotas = 0;

    for (let nota of notas) {
        if (nota === maiorNota && somaPesos < 4) {
            somaNotas += nota * 4;
            somaPesos += 4;
        } else {
            somaNotas += nota * 3;
            somaPesos += 3;
        }
    }

    const media = somaNotas / somaPesos;

    console.log(`Código de aluno: ${studentCode}`);
    console.log(`Notas: ${notas[0]}, ${notas[1]}, ${notas[2]}`);
    console.log(`Média ponderada: ${media.toFixed(2)}`);

    if (media >= 5) {
        console.log('APROVADO\n');
    } else {
        console.log('REPROVADO\n');
    }
}

studentGrades();