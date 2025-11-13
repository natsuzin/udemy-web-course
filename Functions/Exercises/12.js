// Faça um algoritmo que calcule o fatorial de um número. 

function factorial(n) {
    if (n < 0) {
        return 'Factorial is not defined for negative numbers.';
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720
console.log(factorial(-3)); // Factorial is not defined for negative numbers.   