/*
 * -> Call & Apply
 * Demonstrates the use of call and apply methods to invoke functions with a specified 'this' context.
 * These methods allow you to control the value of 'this' inside a function, enabling more flexible and dynamic function calls.
 */

function getPrice(tax = 0, currency = 'USD') {
    return `${currency} ${(this.price * (1 - this.discount) * (1 + tax)).toFixed(2)}`;
}

const product = {
    name: 'Laptop',
    price: 1200,
    discount: 0.15,
    getPrice
}

console.log(getPrice()); // USD NaN because 'this' is undefined

console.log('----');

console.log(product.getPrice()); // USD 1200.00 because 'this' refers to product

console.log('----');

global.price = 20;
global.discount = 0.1;

console.log(getPrice()); // USD 20.00 because 'this' refers to global object

console.log('----');

const car = {
    price: 30000,
    discount: 0.20
}

console.log(getPrice.call(car)); // USD 28500.00 because 'this' refers to car
console.log(getPrice.apply(car)); // USD 28500.00 because 'this' refers to car

console.log('----');

console.log(getPrice.call(car, 0.05, 'EUR')); // EUR 29925.00 with tax and currency
console.log(getPrice.apply(car, [0.05, 'EUR'])); // EUR 29925.00 with tax and currency