// ES6 Classes
// Introduction
// With the introduction of ES6, JavaScript developers now have access to the Class keyword. However, don't be fooled: ES6's Classes are just syntactic wrappers around the Object Constructors we've already learned. 

// Class and constructor
// Let's define a simple class: Dot. Dots have an x value and a y value. Consider the below definition
class Dot1 {
    constructor(x, y){
        this.x = x;
        this.y = y;
        // console.log(`You created a Dot! X: ${this.x} and Y: ${this.y}`);
        console.log('You created a Dot! X: ' + this.x + ' and Y: ' + this.y);
    }
}
// const dot1 = new Dot1(10, 10);

// ES5 way of doing things 
function Dot(x, y){
    this.x = x;
    this.y = y;
}
Dot.prototype.showLocation = function() {
    // console.log(`This Dot is at x: ${this.x} and y ${this.y}`);
    console.log('You created a Dot! X: ' + this.x + ' and Y: ' + this.y);
}
const dot2 = new Dot(55, 20);
// dot2.showLocation();

// ES6 way
class DotClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
const dot3 = new DotClass(5, 13);
// dot3.showLocation();

class Person {
    constructor(first, last, age, gender, interests){
        this.first = first;
        this.last = last;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    showLocation(){
        console.log('this is the showLocation function');
    }
    getInfo(){
        // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
        console.log(`Hi ${this.first} ${this.last}.  You are ${this.gender}, ${this.age} years of age.`)
    }
    // static method
    static getHelp(){
        console.log(`This is a Person class, created for Person. It takes name, age, gender and interestes as parameters.`)
    }
}

const jeremy1 = new Person("Jeremy", "Wilson", 43, "male", "skiing, dating, hiking")
jeremy1.getInfo();
jeremy1.showLocation();
const anika1 = new Person("Anika", "Wilson", 14, "female", "music, hanging out, soccer")
anika1.getInfo();
// we can see getInfo from our instance...
// console.log(jeremy1.getInfo);
// but we can't see getHelp
// console.log(anika1.getHelp);
Person.getHelp();
// however we can call getHelp this way: