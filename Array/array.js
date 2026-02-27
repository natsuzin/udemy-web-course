console.log(typeof Array, typeof new Array, typeof []) 

let approved = new Array('Bia', 'Carlos', 'Ana')
console.log(approved)

approved = ['Bia', 'Carlos', 'Ana']
console.log(approved[0]) // Bia
console.log(approved[1]) // Carlos
console.log(approved[2]) // Ana
console.log(approved[3]) // undefined

approved[3] = 'Paulo' // Adicionando um novo elemento ao array
approved.push('Abia') // Adicionando um novo elemento ao array
console.log(approved.length) // 5

approved[9] = 'Rafael' // Adicionando um novo elemento ao array, mas com um índice muito alto, o que cria "buracos" no array
console.log(approved.length) // 10
console.log(approved[8] === undefined) // true, pois o índice 8 não foi definido, ou seja, é um "buraco" no array
console.log(approved[9]) // Rafael

console.log(approved)

const sortedApproved = approved.sort() // Ordena o array em ordem alfabética
console.log(sortedApproved)

delete approved[1] // Deleta o elemento no índice 1, mas não remove o índice do array, ou seja, o índice 1 se torna um "buraco" no array
console.log(approved[1]) // undefined, pois o índice 1 foi deletado, ou seja, é um "buraco" no array
console.log(approved[2]) // Ana, pois o índice 2 não foi afetado pelo delete
console.log(approved.length) // 10, pois o delete não remove o índice do array, ou seja, o array ainda tem 10 índices, mas alguns deles são "buracos"

approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 1) // Remove o elemento no índice 1, ou seja, Carlos, e os elementos seguintes são movidos para preencher o "buraco" deixado por Carlos
console.log(approved) // [ 'Bia', 'Ana' ]

approved.splice(1, 0, 'Elemento1', 'Elemento2') // Adiciona os elementos Elemento1 e Elemento2 no índice 1, ou seja, entre Bia e Ana, e os elementos seguintes são movidos para abrir espaço para os novos elementos
console.log(approved) // [ 'Bia', 'Elemento1', 'Elemento2', 'Ana' ]