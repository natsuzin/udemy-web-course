/*
 * -> Data Types
 * These are categories that determine the type of value a variable can store and how that value can be manipulated.
 * In JavaScript, data types specify the format and nature of the values you use in the code.
*/

// Number: numbers (integers or decimals).
const a = 2.0;
let b = Number('3.2');

console.log(a, b);
console.log(Number.isInteger(a));
console.log(Number.isInteger(b));
console.log(typeof a);

console.log('\n');

// String: text (sequences of characters).
const word = "potato";

console.log(word.charAt(4));
console.log(word.charCodeAt(3));
console.log(word.indexOf('a'));
console.log(word.substring(1));
console.log(word.substring(0, 5));
console.log("I love ".concat(word).concat('!'));
console.log("I love " + word + "!");
console.log('Ana,Mary,John'.split(','));

// ... Template Strings
const myName = "Nathalia";
const template = `
    Hello, ${myName}!
`
console.log(template);
console.log(`1 + 1 = ${1+1}`);

const up = text => text.toUpperCase();
console.log(`Hey... ${up('watch out')}!`);

console.log('\n');

// Boolean: logical values (true or false).
let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive); // true
console.log(!isActive); // false

console.log(myName || 'Unknown');

console.log('\n');

// Array: used to store collections of values.
const aArray = [1.5, 3.0, 8.6, 6.4];
console.log(aArray[0], aArray[2]);
console.log(aArray[9]);

aArray[4] = 10;
console.log(aArray);
console.log(aArray.length);

console.log(aArray.pop());
delete aArray[0];
console.log(aArray);

console.log(typeof aArray);

console.log('\n');

// Object: structured data collections (such as arrays and objects).
const product1 = {};
product1.pName = "Radio";
product1.pPrice = 99.99;
console.log(product1);

const product2 = {
    pName: "Computer",
    pPrice: 499.99
}
console.log(product2);

console.log('\n');

// Null and Undefined: represent the absence or undefined state of a value.
let val; // not initialized
console.log(val); // undefined

val = null;
console.log(val); // absence of value

const product = {};
console.log(product.price); // undefined

product.price = 3.5;
console.log(product.price);
