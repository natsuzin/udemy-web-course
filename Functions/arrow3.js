/*
 * -> Arrow Function
 * 
 * Arrow functions provide a concise syntax for writing functions in JavaScript.
 * They also lexically bind the 'this' value, meaning they inherit 'this' from the surrounding code context.
 */

let compareToThis = function(param) {
    console.log(this === param)
}

compareToThis(global) // true, because 'this' refers to the global object

const obj = {}
compareToThis = compareToThis.bind(obj)
compareToThis(global) // false, because 'this' is now bound to 'obj'
compareToThis(obj) // true, because 'this' refers to 'obj'

let compareToThisArrow = param => console.log(this === param) // Arrow function

compareToThisArrow(global) // false, because arrow functions do not bind 'this' to the global object
compareToThisArrow(this) // (module.exports) true

// This in arrow functions refers to the surrounding context
// In this case, it's the module.exports object in Node.js

compareToThisArrow = compareToThisArrow.bind(obj)
compareToThisArrow(obj) // false, because arrow functions cannot have 'this' changed with bind
compareToThisArrow(module.exports) // (this) true