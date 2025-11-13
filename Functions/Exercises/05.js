// 05) Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30.

function format(value) {
    return 'R$' + value.toFixed(2).replace ('.', ',');
}

console.log(format(0.30000000000000004)); // R$0,30
console.log(format(2.5)); // R$2,50
console.log(format(10)); // R$10,00