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
// console.log(`Here is the value: ${example}`);
example = "I'm the example!";

// 1
console.log(hello);
var hello = 'Hello World';

// returns hello is undefined

// Question 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// returns magnet

// Question 3
var jeremy = 'super cool';
function print() {
    jeremy = 'only okay';
    console.log(jeremy);
}
console.log(jeremy);

// returns 'super cool'

// Question 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// returns chicken, half-chicken


// Question 5
// mean();
// console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
// console.log(food);

// returns an error => TypeError: mean is not a function, variable mean got hoisted to the top before the function was assigned


// Question 6
// console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// returns undefined, then rock, r&b, then disco

// Question 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// returns san jose, then seattle, then burbank, then san jose again

// Question 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";    // => this causes error, TypeError: Assignment to constant variable.
        // dojo.status = "closed for now"; // => this would return an updated object with status 'closed for now'
    }
    return dojo;
}

// returns error
// let instead of const returns: { name: 'Chicago', students: 65, hiring: true }