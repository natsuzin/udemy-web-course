/*
 * -> Callback Functions
 * 
 * A callback function is a function that is passed as an argument to another function
 * and is executed after some operation has been completed. This allows for asynchronous programming
 * and helps in managing tasks that take time to complete, such as data fetching or event handling.
 */

const manufacturer = ["Toyota", "Ford", "BMW", "Audi"];

function print(name, index) {
    console.log(`${index + 1}. ${name}`);
}

manufacturer.forEach(print);

// Output: 
// 1. Toyota
// 2. Ford
// 3. BMW
// 4. Audi

console.log("----");

manufacturer.forEach(function(a) {
    console.log(a);
});

console.log("----");

manufacturer.forEach(manufacturer => console.log(manufacturer));

// Output:
// Toyota
// Ford
// BMW
// Audi