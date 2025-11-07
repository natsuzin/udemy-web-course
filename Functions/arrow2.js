/*
 * -> Arrow Function
 * 
 * Arrow functions provide a concise syntax for writing functions in JavaScript.
 * They also lexically bind the 'this' value, meaning they inherit 'this' from the surrounding code context.
 */

function Person() {
    this.age = 0

    setInterval(() => {
        this.age++
        console.log(this.age)
    }, 1000) // Arrow function inherits 'this' from Person
}

new Person