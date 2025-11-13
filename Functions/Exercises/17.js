// 17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:  
// Plano Aumento 
//   A     10% 
//   B     15% 
//   C     20% 
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. 
// Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calculateNewSalary(plan, currentSalary) {
    plan = plan.toUpperCase();
    let newSalary;
    switch (plan) {
        case 'A':
            newSalary = currentSalary * 1.10;
            break;
        case 'B':
            newSalary = currentSalary * 1.15;
            break;
        case 'C':
            newSalary = currentSalary * 1.20;
            break;
        default:
            console.log('Plano inválido');
            return;
    }
    console.log(`Novo salário: R$ ${newSalary}`);
}

calculateNewSalary('A', 1000); // Novo salário: R$ 1100.00
calculateNewSalary('B', 2000); // Novo salário: R$ 2300.00
calculateNewSalary('c', 3000); // Novo salário: R$ 3600.00
calculateNewSalary('D', 4000); // Plano inválido