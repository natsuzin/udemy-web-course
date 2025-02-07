/*
 * -> Function VS Object
 * An object is a structure that groups data (attributes) and behaviors (methods). 
 * A function, on the other hand, is a block of code that performs a specific task and can return a value.
 */

console.log(typeof Object); // function
console.log(typeof new Object()); // object

const Cliente = function() {}
console.log(typeof Cliente); // function
console.log(typeof new Cliente()); // object

class Produto {}
console.log(typeof Produto); // function
console.log(typeof new Produto()); // object

// Object
const car = {
  brand: "Toyota",
  accelerate: function() {
    console.log("Vroom!");
  }
};

// Function
function add(a, b) {
  return a + b;
}
