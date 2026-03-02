// Reduce 

const students = [
    { name: 'João', grade: 7.3, scholarship: false },
    { name: 'Maria', grade: 9.2, scholarship: true },
    { name: 'Pedro', grade: 9.8, scholarship: false },
    { name: 'Ana', grade: 8.7, scholarship: true }
]

const result = students.map(a => a.grade).reduce(function(acc, grade) {
    console.log(acc, grade)
    return acc + grade
})

console.log(result) // 35.0, it's the sum of all the students' grades

/////
console.log('------------------')
/////

// Quest 1: are all the students on scholarships?

const allScholarships = (result, scholarship) => result && scholarship
console.log(students.map(a => a.scholarship).reduce(allScholarships)) // false

// Quest 2: are there any scholarship students?

const anyScholarship = (result, scholarship) => result || scholarship
console.log(students.map(a => a.scholarship).reduce(anyScholarship))

/////
console.log('------------------')
/////

Array.prototype.reduce2 = function(callback, initialValue) {
    const initialIndex = initialValue ? 0 : 1
    let acumulator = initialValue || this [0]
    for (let i=initialIndex; i < this.length; i++) {
        acumulator = callback(acumulator, this[i], i, this)
    }
    return acumulator
}

const sum = (total, value) => total + value
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(sum, 21))