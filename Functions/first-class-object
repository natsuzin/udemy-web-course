/*
 * -> First Class Citizen
 * A first-class citizen (or first-class object) is an entity that can be passed as an argument to a function, returned from a function, or assigned to a variable.
 */

// Create a function literally
function fun1() { }


// Store in a variable 
const fun2 = function() { }


// Store in an array
const array = [function(a, b) { return a+b; }];

console.log(array[0](2, 3)); // 5

const array2 = [fun1, fun2];


// Store function as a parameter
function fun3(fun) {
    fun();
}

fun3(function() { console.log("Executing...") }); // Executing...


// A function can return/hold a function
function fun4(a, b) {
    return function(c) {
        console.log(a+b+c);
    }
}

fun4(2, 3)(4); // 9

const fun5 = fun4(2, 3);
fun5(4); // 9