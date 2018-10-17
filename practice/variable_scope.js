// var count = 0;

function counter(){
    var count = 0;
    function childScope(){
        // return count++   // => starts and 0 and increments up
        return ++count      // => starts instead at 1 and increments up
    }
    return childScope;
}
var counter = counter();
// console.log(counter);

// // 0, when using count++
// console.log(counter());
// // 1, when using count++
// console.log(counter());
// // 2, when using count++
// console.log(counter());
// // 3, when using count++
// console.log(counter());
// // 4, when using count++
// console.log(counter());
// // 5, when using count++

let person = {
    'name': 'Jeremy',
    'age': 43,
    'height': 72,
    'weight': 175,
    'hair': 'brown'
}

// Example
// console.log(magicalUnicorns);
// var magicalUnicorns = 'awesome';

// with hoisting, the interpreter actually reads the above code as follows
// the declaration gets hoisted to the top of the scope by itself

// var magicalUnicorns  
// console.log(magicalUnicorns);  // => we log it as undefined
// magicalUnicorns = 'awesome';   // => the assignment stays exactly where it was

// On the flip side, let and const do not allow us to do this
// Example
// console.log(magicalUnicorns);
// let magicalUnicorns = "awesome!";

var foo = "bar";
function magic1() {
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic1();
console.log(foo);

var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic2() {         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}
foo = "bar";              // here, we assign a value to the global 'foo'
// magic2();                  // magic is called, the first console.log runs
// console.log(food);         // finally we log the global foo

// var magicalUnicorns;  // => this gets hoisted from the variable before getting assigned to the function
magicalUnicorns();      // => throws 'TypeError: magicalUnicorns is not a function'
var magicalUnicorns = function () {
    console.log("Will it blend?");
}
console.log("Don't breathe this!");