/*
 * -> Ternary Operator
 * It is a simplified way to write conditional structures (if/else) in JavaScript. 
 * It evaluates an expression and returns a value based on a condition.
 */

const result = grade => grade >= 7 ? 'Approved' : 'Failed';

console.log(result(7.1));
console.log(result(6.7));
