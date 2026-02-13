const ferrari = {
    model: 'F40',
    velMax: 324
}

const volvo = {
    model: 'V40',
    velMax: 200
}

// __proto__: reference to the prototype of the object, accessible in any object
console.log(ferrari.__proto__) // [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // null

function MyObject() { }
console.log(typeof Object, typeof MyObject) // function function
console.log(Object.prototype, MyObject.prototype) // [Object: null prototype] {} {}

/////

// prototype chain
Object.prototype.attr0 = '0'
const grandfather = { attr1: 'A' }
const father = { __proto__: grandfather, attr2: 'B', attr3: '3' }
const son = { __proto__: father, attr3: 'C' }

console.log(son.attr0, son.attr1, son.attr2, son.attr3) // 0 A B C

const car = {
    currentVel: 0,
    maxVel: 200,
    accelerate(delta) {
        if(this.currentVel + delta <= this.maxVel) {
            this.currentVel += delta
        } else {
            this.currentVel = this.maxVel
        }
    },
    setStatus() {
        return `${this.currentVel}Km/h of ${this.maxVel}Km/h`
    }
}

const mazda = {
    model: 'Miata',
    maxVel: 300
}

const nissan = {
    model: 'Skyline',
    status() {
        return `${this.model}: ${super.setStatus()}`
    }
}

Object.setPrototypeOf(mazda, car)
Object.setPrototypeOf(nissan, car)

console.log(mazda)
console.log(nissan)

nissan.accelerate(250)
console.log(nissan.status())

/////

// Object.create() - creates a new object with the specified prototype object and properties

const father2 = { name: 'John', hairColor: 'black' }

const daughter1 = Object.create(father2) // creates a new object with father2 as its prototype
daughter1.name = 'Anna'
console.log(daughter1.name, daughter1.hairColor) // Anna black

const daughter2 = Object.create(father2, {
    name: {value: 'Maria', writable: false, enumerable: true}
})
daughter2.name = 'Clara'
console.log(`${daughter2.name} has ${daughter2.hairColor} hair`) // Maria black

console.log(Object.keys(daughter1)) // [ 'name' ]
console.log(Object.keys(daughter2)) // [ 'name' ]

for (let key in daughter2) {
    daughter2.hasOwnProperty(key) ? // checks if the property is a direct property of the object
        console.log(key) : console.log(`Inherited: ${key}`)
}

/////

// Prototype attribute of a function

function MyObject() { }
console.log(MyObject.prototype) // MyObject {}

const obj1 = new MyObject()
const obj2 = new MyObject()
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MyObject.prototype === obj1.__proto__) // true
console.log(MyObject.prototype === obj2.__proto__) // true

MyObject.prototype.name = 'Annonymous'
MyObject.prototype.speak = function() {         // adding a method to the prototype of MyObject
    console.log(`Hello, I am a ${this.name}`)   
}

obj1.speak() // Hello, I am a Annonymous

obj2.name = 'Not Annonymous'
obj2.speak() // Hello, I am a Not Annonymous

const obj3 = {}
obj3.__proto__ = MyObject.prototype
obj3.name = 'Obj3'
obj3.speak() // Hello, I am a Obj3

// Prototype chain of functions
// Function is a function, so it is an object, and it has a prototype that points to Function.prototype
// Function.prototype is an object, so it has a prototype that points to Object.prototype
// Object.prototype is the end of the prototype chain, so its prototype is null
console.log((new MyObject()).__proto__ === MyObject.prototype) // true
console.log(MyObject.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true

/////

// Overriding toString method
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Hello World!'.reverse()) // !dlroW olleH

// Adding a method to Array prototype
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // 1

// DON'T DO THIS AT HOME (overriding built-in methods can lead to unexpected behavior)
String.prototype.toString = function() { // overriding the toString method of String prototype
    return 'Mess'
}

console.log('Hello'.reverse()) // sseM

/////

// Objects constructed with functions
function Class(name, videoID) {
    this.name = name
    this.videoID = videoID
}

const class1 = new Class('JavaScript Basic', 123)
const class2 = new Class ('JavaScript Advanced', 456)

console.log(class1, class2)

// Simulating the new operator
function newO(f, ...params){ // receives a function and its parameters
    const obj = {} // creates a new empty object
    obj.__proto__ = f.prototype // sets the prototype of the new object to the prototype of the function
    f.apply(obj, params) // applies the function to the new object, passing the parameters
    return obj // returns the new object
}

const class3 = newO(Class, 'Python Basic', 789)
const class4 = newO(Class, 'Python Advanced', 101112)

console.log(class3, class4)