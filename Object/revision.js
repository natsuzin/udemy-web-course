// Dynamic collection of key/value pairs

const product = new Object

product.name = 'Chair'
product['product brand'] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['product brand']
console.log(product)

/////

const car = {
    brand: 'Civic',
    price: 85000,
    owner: {
        name: 'Edu',
        age: 25,
    },
    conductors: [{
        name: 'Nat',
        age: 24
    }],
    calculateSafeValue: function() {
        // ...
    }
}

console.log(car)
delete car.conductors
delete car.calculateSafeValue
console.log(car)
console.log(car.conductors)

/////

const person = {name: 'John'}
person.name = 'Peter'
console.log(person)

Object.freeze(person) // you cannot changue the value of the person variable

person.name = 'Mary'
console.log(person.name)

