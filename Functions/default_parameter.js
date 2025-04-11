/* 
 * -> Default Parameter
 * It's a value that a function assumes for a parameter if it is not supplied when the function is called.
 */

function sum1(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}
console.log(sum1(), sum1(3), sum1(1, 2, 3), sum1(0, 0, 0));

function sum2(a, b, c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; // safer

    return a + b + c;
}
console.log(sum2(), sum2(3), sum2(1, 2, 3), sum2(0, 0, 0));

// es2015 version
function sum2(a = 1, b = 1, c = 1){ // most suitable
    return a + b + c;
}
console.log(sum3(), sum3(3), sum3(1, 2, 3), sum3(0, 0, 0));

