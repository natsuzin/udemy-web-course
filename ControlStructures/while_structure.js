/*
 * -> WHILE Structure
 * Executes as long as the condition remains true.
 */

function getRandomIntBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option = 0;

while(option != -1) {
    option = getRandomIntBetween(-1, 10);
    console.log(`Option chosen: ${option}`);
}


let counter = 1;

while(counter <= 10) {
    console.log(`Contador: ${counter}`);
    counter++;
}