// Assignment: Ninja Class II
// Complete the below challenges using Ninja from the previous assignment.

// .punch()
// Add a new method to Ninja called .punch(). 
// This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. 
// Your .punch() should display a console message like the below example.

// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and like .punch() will take another Ninja instance.

// Validations
// Update .punch() and .kick() so that they only accept Instances of Ninja.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

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
    // validation using punch function
    this.punch = function(ninja){
        if(ninja instanceof Ninja){
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 health");
            ninja.health -= 5;
        } else {
            console.log("Not a valid ninja")
        }
    }
    // validation using kick function
    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            let damage = (strength * 15);
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage.toString() + " health");
            ninja.health -= damage;
        } else {
            console.log("Not a valid ninja")
        }
    }
    this.slashed = function(ninja){
        if(ninja instanceof Ninja){
            let damage = (ninja.health * 1);
            console.log(ninja.name + " was sword slashed by " + this.name + " and died.  Don't play with swords kids...");
            ninja.health -= damage;
        } else {
            console.log("Not a valid ninja.")
        }
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
console.log("==================")
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
redNinja.showStats();
blueNinja.showStats();

console.log("==================")
redNinja.slashed(blueNinja);
blueNinja.showStats();

var x = 5;
redNinja.punch(x);
blueNinja.punch(x);