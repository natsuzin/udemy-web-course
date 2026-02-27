const products = [
    { name: 'Notebook', price: 2499, fragil: true },
    { name: 'iPad Pro', price: 4199, fragil: true },
    { name: 'Copo de Vidro', price: 12.49, fragil: true },
    { name: 'Copo de Plástico', price: 18.99, fragil: false }
]

console.log(products.filter(function(p){
    return p.price > 2200
}))

const isFragil = p => p.fragil
console.log("Produtos frágeis:", products.filter(isFragil))

const isExpensive = p => p.price > 2500
console.log("Produtos caros:", products.filter(isExpensive))

console.log("Produtos caros e frágeis:", products.filter(isExpensive).filter(isFragil))

/////
console.log('------------------')
/////

// callback do filter recebe o elemento, o índice e o array original como argumentos, e deve retornar true para manter o elemento no novo array ou false para descartá-lo

Array.prototype.filter2 = function(callback) {
    const newArray = [] // o filter cria um novo array do zero
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) { 
            newArray.push(this[i]) // se o callback retornar true, o elemento é adicionado ao newArray usando o push()
        }
    }
    return newArray
}

console.log("Produtos frágeis (filter2):", products.filter2(isFragil))
console.log("Produtos caros (filter2):", products.filter2(isExpensive))
console.log("Produtos caros e frágeis (filter2):", products.filter2(isExpensive).filter2(isFragil))