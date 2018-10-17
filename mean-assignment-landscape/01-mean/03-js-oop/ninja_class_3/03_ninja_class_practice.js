// Assignment: Ninja Class III
// Part I
// Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):

// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 health to the Ninja

class Ninja {
    constructor (name, strength){  // create constructor and add specific input value(s)
        this.name = name;           // Public
        this.health = 100;          // Public
        this._strength = strength;  // Public
        const speed = 3;            // Private
        // const strength = 3; // Private, commented out in favor of passing value to getter function used below
    }
    // this.sayName = function() {} is the ES5 syntax
    sayName() {
        console.log(`My ninja name is ${this.name}!`);
    }
    // 'Getter' functions help us read private variables
    showStats() {   // this.showStats = function() {} is the ES5 syntax
        console.log(`Ninja name is ${this.name}. Health is ${this.health}. Speed is: ${this.speed}. Strength is: ${this._strength}`);
    }
    // 'Getter' functions help us read private variables
    get strength() {
        return this._strength;
    }
    // 'Getter' functions help us read private variables
    getSpeed() {
        return speed;
    }
    // 'Getter' functions help us read private variables
    drinkSake() {
        this.health += 10;
        console.log("Drank Sake and health increased to " + this.health);
        return this;
    }
}

// create Sense class to extend Ninja
class Sensei extends Ninja {
    constructor (name, strength){
        super(name, strength);
        this.name = name;
        this._strength = strength;
        this.health = 200;
        this.speed = 10;
        this.wisdom = 10;
        this.blind = true;
    }

    speakWisdom(){
        //Get funtion from parent class
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const ninja1 = new Ninja('Zatoichi', 3);
console.log("==================")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei('Master Splinter', 3);
console.log("==================")
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
