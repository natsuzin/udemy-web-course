// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
// 1) crianças com menos de 10 anos pagam R$80; 
// 2) conveniados com idade entre 10 e 30 anos pagam R$50;
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
// e 4) conveniados acima de 60 anos pagam R$130.

function calculateHealthPlanCost(age) {
    let baseCost = 100;
    let additionalCost;

    switch (true) {
        case (age > 0 && age < 10):
            additionalCost = 80;
            break;
        case (age >= 10 && age <= 30):
            additionalCost = 50;
            break;
        case (age > 30 && age <= 60):
            additionalCost = 95;
            break;
        case (age > 60):
            additionalCost = 130;
            break;
        default:
            return 'Idade inválida.';
    }
    return `O valor total do plano de saúde é R$ ${baseCost + additionalCost}`;
}

console.log(calculateHealthPlanCost(5));   // O valor total do plano de saúde é R$ 180
console.log(calculateHealthPlanCost(25));  // O valor total do plano de saúde é R$ 150
console.log(calculateHealthPlanCost(45));  // O valor total do plano de saúde é R$ 195
console.log(calculateHealthPlanCost(70));  // O valor total do plano de saúde é R$ 230
console.log(calculateHealthPlanCost(-5));  // Idade inválida.