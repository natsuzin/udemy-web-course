const approved = ['Ana', 'Bia', 'Carlos']

approved.forEach(function(name, index) { // O forEach() é um método de array que executa uma função para cada elemento do array, ou seja, ele percorre o array e executa a função para cada elemento, passando o elemento e o índice como argumentos para a função
    console.log(`${index + 1}) ${name}`) // O índice é incrementado em 1 para começar a contagem a partir de 1, e o nome é exibido junto com o índice
})

approved.forEach(name => console.log(name)) // A função passada para o forEach() pode ser uma função anônima, ou seja, uma função sem nome, e pode ser escrita de forma mais concisa usando a sintaxe de arrow function, ou seja, usando a seta => para indicar que é uma função. Nesse caso, a função recebe apenas um argumento, que é o nome, e exibe o nome no console.

const showApproved = approved => console.log(approved) // A função showApproved é uma função que recebe um argumento, que é o array approved, e exibe o array no console. Essa função pode ser passada para o forEach() para exibir cada elemento do array, ou seja, cada nome aprovado.
approved.forEach(showApproved) // O forEach() executa a função showApproved para cada elemento do array approved, ou seja, para cada nome aprovado, e exibe o nome no console.


/////
console.log('------------------')
/////

// callback é uma função que é passada como argumento para outra função, ou seja, é uma função que é chamada de volta
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) { 
        callback(this[i], i, this) 
    }
}

const approved2 = ['Ana', 'Bia', 'Carlos', 'Daniel']

approved2.forEach2(function(name, index) { 
    console.log(`${index + 1}) ${name}`) 
})


