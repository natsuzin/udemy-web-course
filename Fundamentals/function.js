/*
 * -> Function
 * Is a reusable block of code that performs a specific task.
 * It can take inputs (parameters), process them, and return an output. Functions help organize and modularize code, making it more readable and maintainable.
*/

console.log(typeof Object); // function
class Product {}
console.log(typeof Product); // function

console.log('\n');

// Function without return
function printSum(a, b) {
    console.log(a + b);
}
printSum(2, 3);

// Function with return
function sum(a, b = 1) {
    return a + b;
}
console.log(sum(3, 7));
console.log(sum(1));

// Function stored in a variable
const showSum = function(a, b) {
    console.log(a + b);
}
showSum(2, 2);

// Arrow function stored in a variable
const division = (a, b) => {
    return a / b;
}
console.log(division(10, 2));

// Implicit return (when a single statement is executed)
const subtraction = (a, b) => a - b;
console.log(subtraction(5, 2));

