// var myString: string;
var myString;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = '9'; // changed 9 to '9' to make it an actual string
var array = ['cat', 'dog', 'horse'];
array.push(234);
console.log('array', array);
function sayHello(name) {
    return "Hello, " + name + "!";
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello(myString)); // passed variable myString to sayHello() function
function fullName(firstName, lastName, middleName) {
    var fullName = firstName + " " + middleName + " " + lastName;
    return fullName;
}
function graduate(ninja) {
    return "Congratulations, " + ninja.firstName + " " + ninja.lastName + ", you earned " + ninja.belts + " belts!";
}
var christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
};
var jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 // => changed belt to belts
};
// This seems to work fine:
// console.log(graduate(christine));
// This one has problems:
// console.log(graduate(jay));
// class Ninja {
//    fullName: string;
//    constructor(
//       public firstName: string,
//       public lastName: string){
//          this.fullName = `${firstName} ${lastName}`;
//       }
//    debug(){
//       console.log("Console.log() is my friend.")
//    }
// }
// This is not making an instance of Ninja, for some reason:
// const jeremy = new Ninja('jeremy wilson', 'jeremy', 'wilson');  // => added new keyword ahead of Ninja
// Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = new Ninja({
//    fullName: "Alan Turing",
//    firstName: "Alan",
//    lastName: "Turing"
// });
// Now I'll make a study function, which is a lot like our graduate function from above:
// function study(programmer: Ninja){
//    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
// }
// Now this has problems:
// console.log(study(jeremy));
var increment = function (x) { return x + 1; };
// This works great:
// console.log(increment(3));
var square = function (x) { return x * x; }; // => added return to x * x inside of {} brackets
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = function (x, y) { return x * y; }; // => added () before arrow function and return inside of {} brackets
// Nor is this working:
var math = function (x, y) {
    var sum = x + y;
    var product = x * y;
    var difference = Math.abs(x - y);
    return [sum, product, difference];
};
var Elephant = /** @class */ (function () {
    function Elephant(age) {
        var _this = this;
        this.age = age;
        this.birthday = function () {
            _this.age++;
        };
    }
    return Elephant;
}());
var babar = new Elephant(8);
setTimeout(babar.birthday, 1000);
setTimeout(function () {
    console.log("Babar's age is " + babar.age + ".");
}, 2000);
// Why didn't babar's age change?
// Fix this by using an arrow function in the Elephant class.
