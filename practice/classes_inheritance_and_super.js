// Inheritance and Super
// Inheritance is much easier with the ES6 class syntax. Using the extends keyword, 
// we can define new classes that inherit from existing classes. Inheritance is a common aspect of OOP, 
// and it's important to see how JavaScript does it a little differently. Let's see inheritance in action:

class Person {
    constructor(first, last, age, gender){
        this.first = first;
        this.last = last;
        this.age = age;
        this.gender = gender;
    }
    getInfo(){
        // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
        console.log(`This constructor.name is: ${this.constructor.name}`)
        console.log(`Hi ${this.first} ${this.last}.  You are ${this.gender}, ${this.age} years of age.`)
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
    // static method
    static getHelp(){
        console.log(`This is a Person class, created for Person. It takes name, age, gender and interestes as parameters.`)
    }
}

// child Interest class => extends Person class
class Interest extends Person {
    constructor(first, last, age, gender, interests){
        super(first, last, age, gender);
        this.interests = interests;
    }
    // simple function in the child class
    childFunction(){
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(`${message}`);
    }
}
// we can now create interests
const jeremy1 = new Interest("Jeremy", "Wilson", 43, "male", "skiing, dating, hiking")
const anika1 = new Interest("Anika", "Wilson", 14, "female", "music, hanging out, soccer")

// console.log(jeremy1);
// console.log(anika1);
jeremy1.getInfo();
anika1.getInfo();

const anika2 = new Interest("Anika", "Wilson", 14, "female", "music, hanging out, soccer")
const alex1 = new Interest('Alex', 'Wilson', 17, 'pc gaming, music, robotics');
alex1.getInfo();
anika2.childFunction();