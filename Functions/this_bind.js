/*
 * -> This and Bind Function
 * 
 * The 'this' keyword in JavaScript refers to the object that is executing the current function.
 * Its value can change depending on how the function is called.
 * The 'bind' method creates a new function that, when called, has its 'this' keyword set to the provided value.
 */

const person = {
    greeting: 'Bom dia!',
    say() {
        console.log(this.greeting)
    }
}

person.say()

const say = person.say
say() // undefined, because 'this' refers to the global object

const sayToPerson = person.say.bind(person)
sayToPerson() // Bom dia!, because 'this' is bound to 'person' object

const sayToAnotherPerson = person.say.bind({ greeting: 'Boa noite!' })
sayToAnotherPerson() // Boa noite!, because 'this' is bound to the new object