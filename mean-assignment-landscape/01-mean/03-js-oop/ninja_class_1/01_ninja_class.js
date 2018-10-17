// Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:
// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja

function Ninja(name){
    this.name = name;   // Public
    this.health = 100;  // Public
    const speed = 3;    // Private
    const strength = 3; // Private

    this.sayName = function () {
        console.log("My ninja name is " + this.name + "!");
    }
    // 'Getter' functions help us read private variables
    this.showStats = function() {
        console.log("Ninja name is " + this.name + ". Health is " + this.health.toString() + ". Speed is: " + speed.toString() + ". Strength is: " + strength.toString());
    }
    // 'Getter' functions help us read private variables
    this.getStrength = function() {
        return strength;
    }
    // 'Getter' functions help us read private variables
    this.getSpeed = function() {
        return speed;
    }
    // 'Getter' functions help us read private variables
    this.drinkSake = function() {
        this.health += 10;
        console.log("Drank Sake and health increased to " + this.health.toString());
        return this;
    }
    // Attach class methods using .prototype
    Ninja.prototype.sayName2 = function() {
        console.log("Prototype contructor says ninja name is " + this.name + "!");
        return this;
    }
}

var ninja1 = new Ninja("Hyabusa", 100);
console.log("==================")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();
ninja1.sayName2();

var ninja2 = new Ninja("Akira", 150);
console.log("==================")
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake().showStats();
ninja1.sayName2();

console.log("==================")
console.log("Hi Ninja: " + ninja1.name + ", with health of: " + ninja1.health);
console.log("Base strength is: " + ninja1.getStrength());
