
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

emotions("happy", function(num) {
    sound="";
    for (var i = 1; i <= num; i++) {
        sound += "ha";
    }
    sound += "!"
    return sound;
});