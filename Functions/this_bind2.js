/*
 * -> This and Bind Function
 * 
 * The 'this' keyword in JavaScript refers to the object that is executing the current function.
 * Its value can change depending on how the function is called.
 * The 'bind' method creates a new function that, when called, has its 'this' keyword set to the provided value.
 */

// Example demonstrating 'this' binding with setInterval
function Person() {
    this.age = 0

    setInterval(function() {
        this.age++
        console.log(this.age)
    }.bind(this), 1000) // Bind 'this' to the Person instance
}

new Person 

// Alternative approach using a closure
function AnotherPerson() {
    this.age = 0

    const self = this // Use 'self' to refer to the Person instance
    setInterval(function() {
        self.age++
        console.log(self.age)
    }, 1000) 
}

new AnotherPerson 