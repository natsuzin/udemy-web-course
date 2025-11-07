/*
 * -> Arrow Function
 * 
 * Arrow functions provide a concise syntax for writing functions in JavaScript.
 * They also lexically bind the 'this' value, meaning they inherit 'this' from the surrounding code context.
 */

let double = function(a) {
    return a * 2
}

double = (a) => {
    return a * 2
}

double = a => a * 2 // Implicit return

console.log(double(Math.PI)) // 6.283185307179586

// More examples
let hello = function () {
    return 'Hello!'
}

hello = () => 'Hello!' // No parameters
hello = _ => 'Hello!' // Single parameter (underscore is a valid identifier)

console.log(hello()) // Hello!