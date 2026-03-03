const moduleA = require('./moduleA');
const moduleB = require('./moduleB');

console.log(moduleA);
console.log(moduleA.hello);
console.log(moduleA.greet);
console.log(moduleA.seeYou);
console.log('------------------')
console.log(moduleB);
console.log(moduleB.greet);
console.log(moduleB.seeYou());