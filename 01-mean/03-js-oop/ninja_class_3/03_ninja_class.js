// Assignment: Ninja Class III
// Part I => Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):

// name, health, speed, strength
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 health to the Ninja

// Part II - Sensei Class => Extend the Ninja class and create the Sensei class. 
// A Sensei should have 200 Health, 10 speed, and 10 strength by default.  In addition, 
// a Sensei should have a new attribute called wisdom, and the default should be 10. 
// Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class,
// before console.logging a wise message.

class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;    // Private
        this.strength = 3; // Private
    }
    sayName(){
        console.log(`Ninja is named: ${this.name}`);
    }
    showStats(){
        console.log(`Ninja is named: ${this.name}.  Ninja has ${this.speed} speed and ${this.strength} strength.`);
    }
    // 'Getter' functions help us read private variables
    getStrength() {
        return strength;
    }
    // 'Getter' functions help us read private variables
    getSpeed() {
        return speed;
    }
    drinkSake(){
        this.health += 10;
        console.log("Drank Sake and health increased to " + this.health);
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        // by using super, we can call the parent method
        super.drinkSake();      //  get drinkSake function from parent class
        const wise_message = console.log('What one programmer can do in one month, two programmers can do in two months.');
        return wise_message;
    }
}

ninja1 = new Ninja('Zatoichi');
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
superSensei.showStats();


class Ninja2 {
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
class Sensei2 extends Ninja2{
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
        //Get function from parent class
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const ninja2 = new Ninja2('Zatoichi');
// console.log("==================")
// ninja2.sayName();
// ninja2.showStats();
// ninja2.drinkSake();
// ninja2.showStats();

const superSensei2 = new Sensei2('Master Splinter');
// console.log("==================")
// superSensei2.sayName();
// superSensei2.showStats();
// superSensei2.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei2.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
