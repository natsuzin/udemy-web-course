// map() é um método de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array original
// Ele é usado para transformar os elementos de um array em um novo formato, sem modificar o array original

const nums = [1, 2, 3, 4, 5]

let result = nums.map(function(e) { 
    return e * 2 // o map precisa ter um retorno
})  

console.log(result) // [2, 4, 6, 8, 10]

const sum10 = e => e + 10
result = nums.map(sum10)
console.log(result)

const triple = e => e * 3
result = nums.map(sum10).map(triple)
console.log(result)

const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
result = nums.map(sum10).map(triple).map(toMoney)
console.log(result) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]

/////
console.log('------------------')
/////

const cart = [
    '{ "name": "Caneta", "price": 7.99 }',
    '{ "name": "Impressora", "price": 649.50 }',
    '{ "name": "Caderno", "price": 27.10 }',
    '{ "name": "Tesoura", "price": 19.20 }',
]

const forObject = json => JSON.parse(json)
const getPrice = item => item.price

result = cart.map(forObject).map(getPrice)
console.log(result) // [ 7.99, 649.5, 27.1, 19.2 ]

/////
console.log('------------------')
/////

Array.prototype.map2 = function(callback) {
    const newArray = [] // o map cria um novo array do zero
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) // o callback recebe o elemento, o índice e o array original como argumentos, e o resultado do callback é adicionado ao newArray usando o push()
    }
    return newArray
}

result = cart.map2(forObject).map2(getPrice)
console.log(result) // [ 7.99, 649.5, 27.1, 19.2 ]