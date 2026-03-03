const counterA = require('./instUnique');
const counterB = require('./instUnique');

const counterC = require('./instNew')();
const counterD = require('./instNew')();

counterA.inc();
counterA.inc();
console.log(counterA.value, counterB.value); 

counterC.inc();
counterC.inc();
console.log(counterC.value, counterD.value);