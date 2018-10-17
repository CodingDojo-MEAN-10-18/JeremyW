// Scope and this
// Objectives:
// 1. The meaning of the keyword this changes depending on its scope.
// 2. Understand how the scope changes and how to maintain your desired scope.

console.log(this);

// the naming convention for Classes and Object Constructors is that they're capitalized and singularcopy
function PersonV1(name, age) {
    let privateVariable = "This variable is private";
    let privateMethod = function() {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
let eliza = new PersonV1("Eliza", 48);
console.log(eliza.privateVariable);
// undefined

function PersonV2(name, age) {
    var privateVariable = "This variable is private";
    var privateMethod = function() {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        // privateMethod();
    }
}
var joe = new PersonV2("Joe", 23);
// joe.greet();

function PersonV3(name, age) {
    // create a private variable that stores a reference to the new object we create
    var self = this;
    var privateVariable = "This variable is private";
    var privateMethod = function() {
        console.log("this is a private method for " + self.name);
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var joe = new PersonV3("Joe", 23);
joe.greet();
