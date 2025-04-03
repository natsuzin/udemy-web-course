/*
 * -> Variable Parameters
 * Allow a function to accept a varying number of arguments.
 * Instead of specifying a fixed number of parameters, you can use a special syntax to handle multiple inputs dynamically.
 */

function sum() {
    let sum = 0;
    for(i in arguments) {
        sum += arguments[i];
    }

    return sum;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1.1, 2.2, 3.3));
console.log(sum('a', 'b'));
