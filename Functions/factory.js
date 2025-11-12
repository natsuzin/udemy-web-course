/*
 * -> Factory Function
 * A factory function is a function that returns a new object every time it is called.
 * It is a simple and flexible way to create multiple instances of similar objects
 * without the need for classes or constructor functions.
 */

// Factory function to create a person object without parameters
function createPerson() {
    return {
        name: 'Bob',
        age: 30
    }
}

console.log(createPerson()); // Output: { name: 'Bob', age: 30 }

console.log("----");

// Factory function with parameters
function factoryProduct(name, price) {
    return {
        name,
        price,
        discount: 0.1 * price
    }
}

const prod1 = factoryProduct('Smartphone', 800);
const prod2 = factoryProduct('Tablet', 600);

console.log(prod1); // Output: { name: 'Smartphone', price: 800, discount: 80 }
console.log(prod2); // Output: { name: 'Tablet', price: 600, discount: 60 }

