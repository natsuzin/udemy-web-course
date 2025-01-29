/*
 * -> Weak Typing
 * It is a typing model in which a programming language allows implicit conversions between data types, potentially causing unexpected behaviors.
 */

// Implicit conversion from string to number
console.log("5" - 2);  // 3 (the string "5" is converted to a number)
console.log("5" * 2);  // 10 (the string "5" is converted to a number)
console.log("5" / 2);  // 2.5 (the string "5" is converted to a number)

// Concatenating strings and numbers
console.log("5" + 2);   // "52" (the number 2 is converted to a string)
console.log(2 + "5");   // "25" (the number 2 is converted to a string)

// Unexpected comparisons
console.log(0 == "");   // true (an empty string is converted to the number 0)
console.log(0 == "0");  // true (the string "0" is converted to the number 0)
console.log(false == "0"); // true (the string "0" is converted to the number 0, which is equal to false)
console.log(null == undefined); // true (they are treated as equivalent)

// Issues with falsy values
if ("0") {
     console.log("Executes!"); // "0" (string) is not a falsy value.
}
if (0) {
     console.log("Does not execute!"); // 0 is a falsy value.
}

// Operations with null and undefined 
console.log(null + 1);  // 1 (null is treated as 0)
console.log(undefined + 1);  // NaN (undefined cannot be converted to a number)
