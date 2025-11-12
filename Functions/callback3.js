/*
 * -> Callback Functions
 * 
 * A callback function is a function that is passed as an argument to another function
 * and is executed after some operation has been completed. This allows for asynchronous programming
 * and helps in managing tasks that take time to complete, such as data fetching or event handling.
 */

// Callback on browser event
document.getElementByTagName("body")[0].onclick = function(e) {
    console.log("The body was clicked!");
}

// Output when body is clicked:
// The body was clicked!
// Note: This code snippet is intended to be run in a browser environment where the DOM is available.

console.log("----");