/*
 * -> Name/Value Pair
 * A Name/Value Pair (or Key/Value Pair) is a fundamental concept where each value is associated with a name (or key).
 */

// Object with name/value pairs
const person = {
    name: "Nathalia",
    age: 23,
    city: "Florianópolis"
};

console.log(person.name);  // "Nathalia"
console.log(person["age"]);  // 23

// Functions can also access name/value pairs
function displayName() {
    const name = "Nat";  // Name/value pair within the function scope
    console.log(name);
}

displayName();  // "Nat"

// Structures like Map use name/value pairs
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

console.log(map.get("key1"));  // "value1"
