/*
 * -> SWITCH Structure
 * Used for multiple conditions, executing the matching case and stopping with break.
 */

const printResult = function(grade) {
    switch(Math.floor(grade)) {
        case 10: case 9:
            console.log("Honor Roll");
            break;
        case 8: case 7:
            console.log("Passed");
            break;
        case 6: case 5: case 4:
            console.log("Recovery")
            break;
        case 3: case 2: case 1: case 0:
            console.log("Failed");
            break;
        default:
            console.log("Invalid grade");
    }
}

printResult(1.1);
printResult(10);
printResult(4.5);
printResult(8.9);
printResult(-5);


let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("You chose an apple");
        break;
    case "banana":
        console.log("You chose a banana");
        break;
    default:
        console.log("Unknown fruit");
}

