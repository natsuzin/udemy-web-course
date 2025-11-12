/*
 * -> Types of Declaration
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Arrow Function
 */

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

function sum (a, b) {
    return a + b;
}
console.log(sum(2, 3)); // 5

console.log("----");    

// 2. Function Expression
const farewell = function(name) {
    return `Goodbye, ${name}!`;
}
console.log(farewell("Bob")); // Goodbye, Bob!

const subtract = function subtract(a, b) { // name is optional
    return a - b;
}
console.log(subtract(5, 2)); // 3

console.log("----");

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

console.log("----");

const square = x => x * x;
console.log(square(5)); // 25