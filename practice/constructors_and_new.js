// Constructors and new
// Objectives:
// 1. What are some benefits of Object Oriented Programming?
// 2. What is an object constructor?
// 3. What is the this keyword, and how is it used in object constructors?
// 4. What is the new keyword, and when do we use it?

function personConstructorV1(name, age) {
    // an object literal that will be returned
    let person = {};
    // attributes of a person
    person.name = name;
    person.age = age;
    // when attached to an object or instance, functions are called 'methods'.
    // this is our first method, greet
    person.greet = function(){
        console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
    }
    // finally, this function must return an instance
    return person;
}

let jeremy = personConstructorV1('Jeremy', 43);
jeremy.greet();
// create the 'steve' instance, run greet
let steve = personConstructorV1('Steve', 27);
// steve.greet();

// create the 'anika' instance, run greet. note that it is different.
let anika = personConstructorV1('Anika', 14);
// anika.greet();

// finally note how we can refine the greet method for any particular instance
let emily = personConstructorV1('Emily', 22);
emily.greet = function() {
    console.log("I am the greatest, ever!");
};
// emily.greet();


function personConstructorV2(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
// the 'new' keyword causes our constructor to return the object we expected.
anika = new personConstructorV2('Anika', 14);
anika.greet();
// console.log(anika);

emily = new personConstructorV2("Emily", 32);
// using this & new, we can now refer to the 'name' attribute of our instance!
emily.greet = function() {
    console.log("My name is " + this.name + " and I'm the coolest ever!");
}
emily.greet();


