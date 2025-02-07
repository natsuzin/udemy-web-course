/*
 * -> Logical Operators
 * They are used to perform operations based on boolean values (true or false). 
 * They help to combine or invert logical expressions.

        true AND true -> true
        true AND false -> false
        false AND false -> false

        true OR ? -> true
        false OR false -> false

        true XOR true -> false
        true XOR false -> true
        false XOR true -> true
        false XOR false -> false

        !true -> false
        !false -> true
 */

function shopping(work1, work2) {
    const buyIceCream = work1 || work2;
    const buyTv50 = work1 && work2;
    const buyTv32 = work1 != work2;
    const stayHealthy = !buyIceCream;

    return { buyIceCream, buyTv50, buyTv32, stayHealthy };
}

console.log(shopping(true, true));
console.log(shopping(true, false));
console.log(shopping(false, true));
console.log(shopping(false, false));
