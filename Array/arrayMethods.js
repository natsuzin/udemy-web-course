const pilots = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

pilots.pop() // remove o último elemento do array, ou seja, 'Hamilton'
console.log(pilots)

pilots.push('Verstappen') // adiciona um elemento no final do array, ou seja, 'Verstappen'
console.log(pilots)

pilots.shift() // remove o primeiro elemento do array, ou seja, 'Senna'
console.log(pilots)

pilots.unshift('Alonso') // adiciona um elemento no início do array, ou seja, 'Alonso'
console.log(pilots)

pilots.splice(2, 0, 'Massa', 'Raikkonen') // adiciona os elementos 'Massa' e 'Raikkonen' a partir do índice 2, ou seja, entre 'Prost' e 'Schumacher'
console.log(pilots)

pilots.splice(3, 1) // remove o elemento no índice 3, ou seja, 'Raikkonen'
console.log(pilots)

const somePilots = pilots.slice(2) // retorna um novo array a partir do índice 2, ou seja, ['Massa', 'Schumacher', 'Verstappen']
console.log(somePilots)

const somePilots2 = pilots.slice(1, 4) // retorna um novo array a partir do índice 1 até o índice 4 (exclusivo), ou seja, ['Prost', 'Massa', 'Schumacher']
console.log(somePilots2)

