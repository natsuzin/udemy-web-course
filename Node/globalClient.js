require('./global')

console.log(MyApp);
console.log(MyApp.greet());

MyApp.name = 'Changed Name';
console.log(MyApp.name); 

// Object.freeze() -> não permite alterações no objeto, tornando imutável