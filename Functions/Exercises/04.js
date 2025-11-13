// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function div(dividend, divisor) {
    const quotient = Math.floor(dividend / divisor); // Resultado da divisão inteira
    const remainder = dividend % divisor; // Resto da divisão
    console.log(`Resultado: ${quotient}, Resto: ${remainder}`); 
}

div(5,2); // Resultado: 2, Resto: 1
div(10,3); // Resultado: 3, Resto: 1