// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe 
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas. 

function basicCalculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return result = num1 + num2;
        case '-':
            return result = num1 - num2;
        case '*':
            return result = num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return result = num1 / num2;
        default:
            return 'Error: Invalid operation';
    }
}

console.log(basicCalculator(2, '+', 3)); // 5
console.log(basicCalculator(5, '-', 2)); // 3
console.log(basicCalculator(4, '*', 3)); // 12
console.log(basicCalculator(10, '/', 2)); // 5
console.log(basicCalculator(10, '/', 0)); // Error: Division by zero
console.log(basicCalculator(8, '^', 2)); // Error: Invalid operation