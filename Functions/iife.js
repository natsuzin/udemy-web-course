/*
 * -> IIFE - Immediately Invoked Function Expression
 * 
 * An IIFE is a JavaScript function that runs as soon as it is defined.
 * It is a design pattern that is also known as a Self-Executing Anonymous Function
 * and contains two major
 */

(function() {
    console.log("This function runs immediately upon definition!");
    console.log("IIFE executed!");
})(); // IIFE ends with (); to invoke it immediately

// Example with parameters
const result = (function(a, b) {
    return a + b;
})(5, 10);

console.log(result); // 15

// Explanation: The function is defined and immediately invoked with the arguments 5 and 10.
// This pattern is often used to create a new scope and avoid polluting the global namespace.