/* 
 * -> IF/ELSE Structure
 * Used for conditional execution. If the condition is true, a block of code runs; otherwise, another block may execute.
 */

//IF...
function goodNews(grade) {
    if(grade >= 7) {
        console.log("Approved!");
    }
}

goodNews(8.0);
goodNews(6.0);

function ifTrueSayIt(value) {
    if(value) // when the structure contains only one line, the use of keys is optional
        console.log("It's true that... " + value);
}

ifTrueSayIt();
ifTrueSayIt(null);
ifTrueSayIt(undefined);
ifTrueSayIt(NaN);
ifTrueSayIt('');
ifTrueSayIt(0);
ifTrueSayIt(-1);
ifTrueSayIt(' ');
ifTrueSayIt('?');
ifTrueSayIt([]);
ifTrueSayIt([1, 2]);
ifTrueSayIt({});


// IF... ELSE...
const showResult = function(grade) {
    if(grade >= 7) {
        console.log('Approved!');
    } else {
        console.log('Failed!');
    }
}

showResult(7.5);
showResult(6.8);

// IF... ELSE... IF...
Number.prototype.between = function(start, end) {
    return this >= start && this <= end;
}

const printResult = function(grade) {
    if (grade.between(9, 10)) {
        console.log("Honor Roll");
    } else if (grade.between(7, 8.99)) {
        console.log("Passed");
    } else if (grade.between(4, 6.99)) {
        console.log("Recovery");
    } else if (grade.between(0, 3.99)) {
        console.log("Failed");
    } else console.log("Invalid grade");
}

printResult(10);
printResult(8.8);
printResult(6.5);
printResult(2);
printResult(123);

