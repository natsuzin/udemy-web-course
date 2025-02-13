/* 
 * -> FOR Structure
 * Repeats a block of code a fixed number of times.
 */

// FOR...
for(let i = 1; i <= 10; i++){
    console.log(`i: ${i}`);
}

const grades = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i = 0; i < grades.length; i++){
    console.log(`Grade: ${grades[i]}`);
}

// FOR... IN...
const person = {
    firstName: 'Maria',
    lastName: 'Silva',
    age: 29,
    weight: 62
}

for (let attribute in person) {
    console.log(`${attribute} = ${person[attribute]}`);
}
