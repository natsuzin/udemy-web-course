/*
 * -> Destructuring
 * It is a JavaScript feature that allows you to extract values from arrays or object properties in a more concise and direct way.
 */

// In objects
const person = {
    name: 'Ana',
    age: 5,
    address: {
        street: 'Rua ABC',
        number: 10
    }
};

const {name, age} = person;
console.log(name, age); // Ana 5

const {name: n, age: i} = person;
console.log(n, i); // Ana 5

const {surname, goodHumor = true} = person;
console.log(surname, goodHumor); // undefined true

const {address: {street, number, zip}} = person;
console.log(street, number, zip); // Rua ABC 10 undefined

// In arrays
const [a] = [10];
console.log(a); // 10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6); // 10 9 undefined 0

const [ , [ , grade]] = [[ , 8, 8], [9, 6, 8]];
console.log(grade); // 6

// In functions
function rand({min = 0, max = 1000}) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

const obj = {max: 50, min: 40};
console.log(rand(obj));
console.log(rand({min: 955}));
console.log(rand({}));

/*
function rand([min = 0, max = 1000]) {
    if (min > max) 
        [min, max] = [max, min];
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

console.log(rand([50, 40]));
console.log(rand([901]));
console.log(rand([ , 10]));
console.log(rand([]));
*/
