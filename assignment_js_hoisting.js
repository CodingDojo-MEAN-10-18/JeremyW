// Assignment: JavaScript Hoisting
// Objectives:
// Practice reading JavaScript the same way as the interpreter reads it.
// Rewrite the code the way it would be seen by the interpreter and predict the output.  An example is shown here:
// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// Note
// Run the same code as above with ES6 syntax and compare your results:
// GIVEN
// console.log(example);
// let example = "I'm the example!";


let example;
console.log(`Here is the value: ${example}`);
// console.log(example);
example = "I'm the example!";