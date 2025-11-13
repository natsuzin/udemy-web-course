// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A 
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. 

function calculatePrice(month, annualFee) {
    if (month < 1 || month > 12) {
        return 'Mês inválido.';
    }

    const monthsLate = month - 1;
    const interestRate = 0.05;
    const totalAmount = annualFee * Math.pow((1 + interestRate), monthsLate);

    return `Total a pagar: R$ ${totalAmount.toFixed(2)}`;
}

console.log(calculatePrice(1, 1000));  // Total a pagar: R$ 1000.00
console.log(calculatePrice(3, 1000));  // Total a pagar: R$ 1102.50
console.log(calculatePrice(6, 1000));  // Total a pagar: R$ 1340.10
console.log(calculatePrice(12, 1000)); // Total a pagar: R$ 1795.86
console.log(calculatePrice(13, 1000)); // Mês inválido.