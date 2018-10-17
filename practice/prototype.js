// .prototype
// Objectives:
// 1. All objects inherit methods and properties from a prototype.
// 2.  Know how to use prototype to affect all objects that inherit from it.
// 3.  Address the limitations of using prototype.

var MyObjConstructor = function(name) {
    var myPrivateVar = "Hello"; // just to show that it is difficult to see this private var
    this.name = name; // but you can see the name!
    this.method = function() {
        console.log( "I am a method");
    };
  }
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
// console.log(obj1);

obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
// console.log(obj1.anotherProperty); // anotherProperty!
// console.log(obj1.newProperty); // newProperty!
// What about obj2?
// console.log(obj2.newProperty); // undefined
// console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!

function Cat(catName) {
    var name = catName;
    this.getName = function() {
      return name;
    };
  }

//adding a method to the cat prototype
Cat.prototype.sayHi = function() {
    console.log('meow');
};

//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
// console.log(muffin, biscuit);
//  we access prototype properties the same way as we would access 'own' properties
// muffin.sayHi();
// biscuit.sayHi();
// console.log(muffin.numLegs);
// we may change an instance's attributes rather than keeping the value set by prototype
muffin.numLegs = 3;
// poor mutant cats: muffin.__proto__.numLegs ++;
// doing this to muffin will cause all the cats to have 5 legs, but muffin will still have 3 legs

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
var jeremy1 = new Person("Jeremy", "Wilson", 43, "male", "skiing, dating, hiking")
console.log(jeremy1.valueOf());
// console.log(Person.prototype);
// console.log(Object.prototype);
var jeremy2 = Object.create(jeremy1);

// var jeremy = Person.prototype.getInfo = function(){
//     console.log(`Hi ${this.first} ${this.last}.  You are ${this.gender}, ${this.age} years of age.`)
// }

Person.prototype.farewell = function(){
    console.log(`${this.first} has left the building.`)
}

jeremy1.farewell();
jeremy2.farewell();;