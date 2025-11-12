/*
 * -> Callback Functions
 * 
 * A callback function is a function that is passed as an argument to another function
 * and is executed after some operation has been completed. This allows for asynchronous programming
 * and helps in managing tasks that take time to complete, such as data fetching or event handling.
 */

const grades = [85, 92, 78, 65, 89, 50, 95, 45];

// Without using callback
let lowGrades1 = [];
for (let i in grades) {
    if (grades[i] < 70) {
        lowGrades1.push(grades[i]);
    }
}

console.log(lowGrades1); // Output: [65, 50, 45]

console.log("----");    

// Using callback
lowGrades2 = grades.filter(function(grade) {
    return grade < 70;
});

console.log(lowGrades2); // Output: [65, 50, 45]

console.log("----");

// Using arrow function as callback
const lowGrades3 = grades.filter(grade => grade < 70);
console.log(lowGrades3); // Output: [65, 50, 45]

console.log("----");

// Using named arrow function as callback
const lowThan80 = grade => grade < 80;
const lowGrades4 = grades.filter(lowThan80);
console.log(lowGrades4); // Output: [78, 65, 50, 45]