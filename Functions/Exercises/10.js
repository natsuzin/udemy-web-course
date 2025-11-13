// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true  ou false. 

function isDivisibleBy3(number) {
    return number % 3 === 0;
}

console.log(isDivisibleBy3(9));  // true
console.log(isDivisibleBy3(10)); // false
console.log(isDivisibleBy3(0));  // true
console.log(isDivisibleBy3(-3)); // true
console.log(isDivisibleBy3(-4)); // false