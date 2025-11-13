// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function calculateBills(amount) {
    const bills = [100, 50, 10, 5, 1];
    const result = {};

    for (let bill of bills) {
        if (amount >= bill) { // Check if the amount is greater than or equal to the bill
            const count = Math.floor(amount / bill); // Calculate how many bills of this denomination are needed
            result[bill] = count; // Store the count in the result object
            amount -= count * bill; // Decrease the amount by the total value of these bills
        }
    }

    for (let bill in result) {
        console.log(`${result[bill]} nota(s) de R$ ${bill}`);
    }
}

calculateBills(18);
// Output:
// 1 nota(s) de R$ 10
// 1 nota(s) de R$ 5
// 3 nota(s) de R$ 1

console.log('---');

calculateBills(286);
// Output:
// 2 nota(s) de R$ 100
// 1 nota(s) de R$ 50
// 3 nota(s) de R$ 10
// 1 nota(s) de R$ 5
// 1 nota(s) de R$ 1