// ES5 OOP
// Objectives:
// 1. Review ES5 object oriented programming.
// 2. How to make private variables with ES5.
// 3. How to chain methods

function Person(first, last, age, gender, interests) {
    // property and method definitions
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.getInfo = function(){
        console.log(`Hi ${this.first} ${this.last}.  You are ${this.gender}, ${this.age} years of age.`)
    }
}

// Create new instances with the new keyword
var jeremy1 = new Person("Jeremy", "Wilson", 43, "male", "skiing, dating, hiking")
// console.log(Person.prototype);
// console.log(Object.prototype);
var jeremy2 = Object.create(jeremy1);
// console.log(jeremy2.valueOf());

// Attach class methods using .prototype
Person.prototype.greet = function() {
    console.log("Hello my name is " + this.first + " and I am " + this.age + " years old!");
    return this;
};
Person.prototype.farewell = function(){
    console.log(`${this.first} has left the building.`)
}

// jeremy1.greet();
// jeremy2.greet();
// jeremy2.farewell();

var amelia = new Person('Amelia', 'Bonaci', 36);
// Create instance methods by attaching the function directly to an instance
amelia.sing = function() {
    console.log("Lalalala!");
};
// amelia.sing();
// amelia.greet();


// Private variables are scoped to the constructor with the 'var' keyword
function Car(make, model) {
    var odometer = 0;
    var direction = '';
    this.make = make;
    this.model = model;
    
    // To make functions private, we scope them to the constructor
    function updateOdometer(distance) {
        odometer += distance;
    };
    
    // 'Getter' functions help us read private variables
    this.readOdometer = function() {
        return odometer;
    }

    function receivedDirection(turncommand){
        direction = turncommand;
    }

    this.directionToTravel = function() {
        return direction;
    }

    // 'Setter' functions help us update private variables
    this.drive = function(distance, turncommand) {
      updateOdometer(distance);
      receivedDirection(turncommand);
      // return this will allow us to chain methods
      return this;
    }

    // this.turn = function(turncommand){
    //     receivedDirection(turncommand);
    //     return this;
    // }
   
}
var myCarInstance = new Car("Chevy", "Camaro");
// by returning this, we can chain drive()
myCarInstance.drive(50).drive(90).drive(50, 'right'); 
// private variable is undefined
// console.log(myCarInstance.odometer);
// but we can read it with our getter function
console.log("Car make: " + myCarInstance.make + ", model: " + myCarInstance.model);
console.log("Total miles driven: " + myCarInstance.readOdometer());
console.log("The car turned: " + myCarInstance.directionToTravel());
