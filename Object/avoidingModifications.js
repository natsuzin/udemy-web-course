// Object.preventExtensions: you cannot add new properties to the object, but you can change or delete existing ones

const product = Object.preventExtensions({
    name: 'Smartphone',
    price: 999,
    tag: 'Promotion'
})

console.log('Extensible:', Object.isExtensible(product)) // false

product.name = 'TV' // you can change existing properties
product.description = '4K Ultra HD' // you cannot add new properties
delete product.tag // you can delete existing properties

console.log(product)

/////

// Object.seal: you cannot add or delete properties, but you can change existing ones

const person1 = {name: 'Bob', age: 40}
Object.seal(person1)
console.log('Sealed:', Object.isSealed(person1)) // true

const person2 = Object.seal({
    name: 'Alice',
    age: 30
})
console.log('Sealed:', Object.isSealed(person2)) // true

person1.name = 'Robert' // you can change existing properties
person1.surname = 'Smith' // you cannot add new properties
delete person1.age // you cannot delete existing properties

console.log(person1)

/////

// Object.freeze: you cannot add, delete or change properties

const person3 = {name: 'Charlie', age: 50}
Object.freeze(person3)
console.log('Frozen:', Object.isFrozen(person3)) // true

const person4 = Object.freeze({
    name: 'Charlie',
    age: 50
})
console.log('Frozen:', Object.isFrozen(person4)) // true