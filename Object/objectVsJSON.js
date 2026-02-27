const obj = { a:1, b:2, c:3, soma() { return this.a + this.b + this.c; } }
console.log(JSON.stringify(obj)) // JSON não tem função, então a função soma() não é convertida para JSON, ou seja, ela é ignorada. O resultado é: {"a":1,"b":2,"c":3}

console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // O JSON é convertido de volta para um objeto JavaScript, mas a função soma() não é recriada, ou seja, ela não existe mais. O resultado é: { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{"a":1,"b":"string","c":true, "d": {}, "e": [], "f": null}')) 

