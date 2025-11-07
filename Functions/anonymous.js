/* 
 * -> Anonymous Functions
 *
 * Anonymous functions are functions that are defined without a name.
 * They are often used as arguments to other functions or assigned to variables.
 */

// Anonymous function assigned to a variable
const sum = function(x, y) {
    return x + y;
}

// Using the anonymous function assigned to a variable
const printResult = function(a, b, operation = sum) {
    console.log(operation(a, b));
}

// Using named function
printResult(3, 4); // 7

// Using anonymous function
printResult(3, 4, sum) // 7

// Using anonymous function directly
printResult(3, 4, function(x, y) { 
    return x - y; 
}) // -1

// Using arrow function as anonymous function
printResult(3, 4, (x, y) => x * y) // 12

const person = {
    toTalk: function() {
        console.log('Hello!');
    }
}

person.toTalk(); // Hello!