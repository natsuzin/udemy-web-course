/* 
 * -> DO...WHILE Structure
 * Similar to while, but ensures the block runs at least once.
 */

function getRandomIntBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option = 0;

do{
    option = getRandomIntBetween(-1, 10);
    console.log(`Option chosen: ${option}`);
}while(option != -1);
