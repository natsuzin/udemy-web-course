/*
 * -> Constructor Functions
 * A constructor function is a special type of function used to create and initialize objects.
 * When called with the 'new' keyword, it creates a new object, sets the context (this) to that object,
 * and allows you to define properties and methods for the object.
 */

// Constructor function for Car objects
function Car(maxVelocity = 200, delta = 5) { 
    // Private attribute
    let currentVelocity = 0;

    // Public method to accelerate the car
    this.accelerate = function() {
        if (currentVelocity + delta <= maxVelocity) {
            currentVelocity += delta;
        } else {
            currentVelocity = maxVelocity;
        }
    }

    // Public method to get the current velocity
    this.getCurrentVelocity = function() {
        return currentVelocity;
    }
}

const car1 = new Car(); // Create a new Car object with default parameters
car1.accelerate();
console.log(car1.getCurrentVelocity()); // Output: 5

console.log("----");

const car2 = new Car(300, 40); // Create a new Car object with custom parameters
car2.accelerate();
car2.accelerate();
car2.accelerate();
console.log(car2.getCurrentVelocity()); // Output: 120

console.log("----");

console.log(typeof Car); // Output: function
console.log(typeof car1); // Output: object

