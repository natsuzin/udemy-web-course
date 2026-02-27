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

console.log(result) // 35.0, que é a soma de todas as notas dos alunos

/////
console.log('------------------')
/////

