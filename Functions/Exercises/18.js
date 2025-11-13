// 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
// Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’

function numberToWords(number) {
    let word;
    switch (number) {
        case 0:
            word = 'Zero';
            break;
        case 1:
            word = 'Um';
            break;
        case 2:
            word = 'Dois';
            break;
        case 3:
            word = 'Três';
            break;
        case 4:
            word = 'Quatro';
            break;
        case 5:
            word = 'Cinco';
            break;
        case 6:
            word = 'Seis';
            break;
        case 7: 
            word = 'Sete';
            break;
        case 8:
            word = 'Oito';
            break;
        case 9:
            word = 'Nove';
            break;
        case 10:
            word = 'Dez';
            break;
        default:
            word = 'Número fora do intervalo.';
        }
        return word;
    }

console.log(numberToWords(0));  // Zero
console.log(numberToWords(3));  // Três
console.log(numberToWords(7));  // Sete
console.log(numberToWords(10)); // Dez
console.log(numberToWords(11)); // Número fora do intervalo