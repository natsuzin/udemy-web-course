/* 
 * -> Closure in JavaScript
 * A closure is a feature in JavaScript where an inner function has access to the outer (enclosing)
 * function's variables and parameters,even after the outer function has returned.
 * This allows for data encapsulation and the creation of private variables.
 */

const x = 'Global';

function outerFunction() {
    const x = 'Local';
    function innerFunction() {
        return x; // Accesses the outerFunction's x
    }
    return innerFunction;
}

const myFunc = outerFunction();
console.log(myFunc()); // Output: Local

// Explanation: The innerFunction forms a closure that captures the variable x from its outer scope (outerFunction).