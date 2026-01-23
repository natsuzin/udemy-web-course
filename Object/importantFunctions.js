const person = { 
    name: 'Nat',
    age: 24,
    weight: 58
}

console.log(Object.keys(person))                        // [ 'name', 'age', 'weight' ]
console.log(Object.values(person))                      // [ 'Nat', 24, 58 ]
console.log(Object.entries(person))                     // [ [ 'name', 'Nat' ], [ 'age', 24 ], [ 'weight', 58 ] ]

Object.entries(person).forEach(e => {                   // name: Nat     age: 24     weight: 58
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(person).forEach(([key,value]) => {       // name: Nat     age: 24     weight: 58
    console.log(`${key}: ${value}`)
})

Object.defineProperty(person, 'birthday', {
    enumerable: true,
    writable: false,
    value: '22/01/2002'
})

person.birthday = '04/02/2001'
console.log(person.birthday)
console.log(Object.keys(person))

/////

const dest = { a:1 }
const o1 = { b:2 }
const o2 = { c: 3, a:4 }
const obj = Object.assign(dest, o1, o2)

console.log(obj)