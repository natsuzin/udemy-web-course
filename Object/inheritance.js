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