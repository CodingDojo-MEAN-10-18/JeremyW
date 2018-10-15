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
    constructor (name){
        this.name = name;   // Public
        this.health = 100;  // Public
        const speed = 3;    // Private
        const strength = 3; // Private

    }

    sayName() {
        console.log(`My ninja name is ${this.name}!`);
    }
    // 'Getter' functions help us read private variables
    showStats() {
        console.log(`Ninja name is ${this.name}. Health is ${this.health}. Speed is: ${this.speed}. Strength is: ${this.strength}`);
    }
    // 'Getter' functions help us read private variables
    getStrength() {
        return strength;
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
class Sensei extends Ninja{
    constructor (name){
        super(name);
        this.name = name;
        this.health = 200;
        this.strength = 10;
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
const ninja1 = new Ninja('Zatoichi');
console.log("==================")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei('Master Splinter');
console.log("==================")
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
