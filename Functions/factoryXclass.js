/* 
 * -> Class X Factory
 * A class is a blueprint for creating objects with shared properties and methods.
 * It provides a more structured and intuitive way to define object templates compared to factory functions.
 * Classes support features like inheritance and encapsulation, making them suitable for complex object-oriented programming.
 * Factory functions, on the other hand, are simple functions that return new objects.
 * They are flexible and easy to use for creating multiple instances of similar objects without the overhead of classes.
 */

// Class definition for Person
class Person {
    constructor(name) {
        this.name = name;
    }

    toTalk() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p1 = new Person('Bob');
p1.toTalk(); // Output: Hello, my name is Bob

console.log("----");

// Constructor function for Person
function Person2 (name) {
    this.name = name;

    this.toTalk = function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p3 = new Person2('John');
p3.toTalk(); // Output: Hello, my name is Charlie

console.log("----");

// Factory function to create a person object
const createPerson = name => {
    return {
        toTalk: () => console.log(`Hello, my name is ${name}`)
    }
}

const p2 = createPerson('Alice');
p2.toTalk(); // Output: Hello, my name is Alice

